import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Base64 } from 'js-base64';
import {
  DataUrl,
  NgxImageCompressService,
  UploadResponse,
} from 'ngx-image-compress';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/core/services/api.service';
import { space } from 'src/app/core/util/space-util';

const toBase64 = (file: File) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
@Component({
  selector: 'app-report-lost-item',
  templateUrl: './report-lost-item.component.html',
  styleUrls: ['./report-lost-item.component.css'],
})
export class ReportLostItemComponent {
  tokenNo: string;
  authType: string = 'nnn';
  title: string = '';
  errors: {
    errors: { [key: string]: string };
  } = { errors: {} };
  isSubmitting = false;
  reportItemForm: UntypedFormGroup;
  id: string;
  isAddMode: boolean;
  @ViewChild('modalButton') ModalTrigger: ElementRef;
  loading = false;
  initialValues: any;
  imgResultMultiple: DataUrl[] = [];
  space = space;
  constructor(
    private fb: UntypedFormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private apiService: ApiService,
    private toastrService: ToastrService,
    private imageCompress: NgxImageCompressService
  ) {
    // use FormBuilder to create a form group
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;

    this.reportItemForm = this.fb.group({
      category: ['', Validators.required],
      lostDateTime: ['', [Validators.required, this.dateRangeValidator]],
      image: [''],
      // file: [
      //   '',
      //   this.isAddMode ? Validators.required : Validators.nullValidator,
      // ],
      primaryNumber: [
        '',
        [
          Validators.required,
          Validators.min(1000000000),
          Validators.max(9999999999),
        ],
      ],
      alternateNumber: [
        '',
        [Validators.min(1000000000), Validators.max(9999999999)],
      ],
      location: ['', Validators.required],
      name: [
        '',
        [
          Validators.pattern('^([^0-9]*)$'),
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30),
        ],
      ],
      description: ['', Validators.required],
      status: [
        '',
        !this.isAddMode ? Validators.required : Validators.nullValidator,
      ],

      // beatBoxId: [
      //   '',
      //   !this.isAddMode ? Validators.required : Validators.nullValidator,
      // ],
      foundLocation: [
        '',
        !this.isAddMode ? Validators.required : Validators.nullValidator,
      ],
    });
    this.initialValues = this.reportItemForm.value;
    if (!this.isAddMode) {
      this.loading = true;
      this.apiService.get('getLostItemById/' + this.id + '/').subscribe(
        (data) => {
          data.data['category'] = data.data.categoryName;
          this.reportItemForm.patchValue(data.data);
          this.loading = false;
        },
        (err) => {
          this.toastrService.error(
            $localize`:@@common-err-msg:Something Went Wrong`,
            $localize`:@@common-err-title:Server Error`
          );
          this.loading = false;
        }
      );
    }
  }
  removeImage(i: number) {
    this.imgResultMultiple.splice(i, 1);
    this.reportItemForm.patchValue({
      image: this.imgResultMultiple,
    });
  }
  uploadMultipleFiles() {
    return this.imageCompress
      .uploadMultipleFiles()
      .then((multipleOrientedFiles: UploadResponse[]) => {
        if (multipleOrientedFiles.length + this.imgResultMultiple.length > 3) {
          this.toastrService.error(
            $localize`:@@common-imgErr-msg:Maximum 3 image is allowed`,
            $localize`:@@common-imgErr-title:Error`
          );
          return;
        }
        multipleOrientedFiles.forEach((data) => {
          this.imageCompress
            .compressFile(data.image, data.orientation, 50, 50)
            .then((result: DataUrl) => {
              this.imgResultMultiple.push(result);
            });
        });

        this.reportItemForm.patchValue({
          image: this.imgResultMultiple,
        });
        // console.log(this.imgResultMultiple);
        // console.log(`${multipleOrientedFiles.length} files selected`);
      });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.reportItemForm.controls;
  }

  submitForm() {
    this.isSubmitting = true;
    if (!this.reportItemForm.valid) return;
    this.loading = true;
    const data = {
      eventName: 'Rath Yatra 2023',
      category: this.reportItemForm.value.category,
      data: this.reportItemForm.value,
    };
    if (this.isAddMode)
      this.apiService
        .post('postLostItem/', {
          data: Base64.encode(JSON.stringify(data)),
        })
        .subscribe(
          (data) => {
            this.tokenNo = data.token;
            this.imgResultMultiple = [];
            this.loading = false;
            this.isSubmitting = false;
            this.ModalTrigger.nativeElement.click();
            this.reportItemForm.reset(this.initialValues);
          },
          (err) => {
            this.toastrService.error(
              $localize`:@@common-err-msg:Something Went Wrong`,
              $localize`:@@common-err-title:Server Error`
            );
            this.loading = false;
            this.isSubmitting = false;
          }
        );
    else {
      const data = {
        id: this.id,
        data: this.reportItemForm.value,
      };
      data.data.status =
        data.data.status.toString().charAt(0).toUpperCase() +
        data.data.status.toString().slice(1);
      this.apiService
        .put('updateLostItemById/', {
          data: Base64.encode(JSON.stringify(data)),
        })
        .subscribe(
          (data) => {
            this.imgResultMultiple = [];
            this.loading = false;
            this.isSubmitting = false;
            this.ModalTrigger.nativeElement.click();
            this.reportItemForm.reset();
          },
          (err) => {
            this.toastrService.error(
              $localize`:@@common-err-msg:Something Went Wrong`,
              $localize`:@@common-err-title:Server Error`
            );
            this.loading = false;
            this.isSubmitting = false;
          }
        );
    }
  }
  navigateToList(isAddMode: boolean) {
    isAddMode
      ? this.router.navigateByUrl('/lost/report-lost-item')
      : this.router.navigateByUrl('/lost/lost-item');
  }
  private dateRangeValidator: ValidatorFn = (): {
    [key: string]: any;
  } | null => {
    let invalid = false;
    const from =
      this.reportItemForm && this.reportItemForm.get('lostDateTime')?.value;
    const to = new Date();
    if (from && to) {
      invalid =
        new Date(from).valueOf() > new Date(to).valueOf() ||
        new Date('2023-05-01').valueOf() > new Date(from).valueOf();
    }
    return invalid ? { invalidRange: true } : null;
  };
}
