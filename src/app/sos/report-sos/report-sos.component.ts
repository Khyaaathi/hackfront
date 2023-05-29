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
@Component({
  selector: 'app-report-sos',
  templateUrl: './report-sos.component.html',
  styleUrls: ['./report-sos.component.css'],
})
export class ReportSosComponent {
  tokenNo: string;
  authType: string = '';
  title: string = '';
  errors: {
    errors: { [key: string]: string };
  } = { errors: {} };
  isSubmitting = false; // original - false
  reportItemForm: UntypedFormGroup;
  id: string;
  isAddMode: boolean;
  loading: boolean;
  initialValues: any;
  space = space;
  imgResultMultiple: DataUrl[] = [];
  @ViewChild('modalButton') ModalTrigger: ElementRef;

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
    this.reportItemForm = this.fb.group({
      category: ['', Validators.required],

      primaryPhoneNumber: [
        '',
        [
          Validators.required,
          Validators.min(1000000000),
          Validators.max(9999999999),
        ],
      ],
      alternatePhoneNumber: [
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
      image: [''],
      description: ['', Validators.required],
      occuranceDateTime: ['', [Validators.required, this.dateRangeValidator]],
    });
    this.initialValues = this.reportItemForm.value;
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.reportItemForm.controls;
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
      });
  }
  submitForm() {
    this.isSubmitting = true;
    if (!this.reportItemForm.valid) return;
    this.loading = true;
    let data = {
      eventName: 'Rath Yatra 2023',
      category: this.reportItemForm.value.category,
      data: {
        location: this.reportItemForm.value.location,
        latitude: 0,
        longitude: 0,
        description: this.reportItemForm.value.description,
        image: this.reportItemForm.value.image,
        name: this.reportItemForm.value.name,
        primaryNumber: this.reportItemForm.value.primaryPhoneNumber,
        alternateNumber: this.reportItemForm.value.alternatePhoneNumber,
        occuranceDateTime: this.reportItemForm.value.occuranceDateTime,
      },
    };
    this.apiService
      .post('postGrievance/', {
        data: Base64.encode(JSON.stringify(data)),
      })
      .subscribe(
        (data) => {
          // var actualData = JSON.parse(Base64.decode(data));
          this.imgResultMultiple = [];
          this.tokenNo = data.token;
          this.reportItemForm.reset(this.initialValues);
          this.isSubmitting = false;
          this.loading = false;
          this.ModalTrigger.nativeElement.click();
        },
        (err) => {
          this.toastrService.error(
            $localize`:@@common-err-msg:Something Went Wrong`,
            $localize`:@@common-err-title:Server Error`
          );
          this.isSubmitting = false;
          this.loading = false;
        }
      );
  }
  private dateRangeValidator: ValidatorFn = (): {
    [key: string]: any;
  } | null => {
    let invalid = false;
    const from =
      this.reportItemForm &&
      this.reportItemForm.get('occuranceDateTime')?.value;
    const to = new Date();
    if (from && to) {
      invalid =
        new Date(from).valueOf() > new Date(to).valueOf() ||
        new Date('2023-05-01').valueOf() > new Date(from).valueOf();
    }
    return invalid ? { invalidRange: true } : null;
  };
}
