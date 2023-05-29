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
import { forkJoin } from 'rxjs';

const toBase64 = (file: File) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
@Component({
  selector: 'app-report-found-item',
  templateUrl: './report-found-item.component.html',
  styleUrls: ['./report-found-item.component.css'],
})
export class ReportFoundItemComponent {
  isSubmitting = false;
  reportItemForm: UntypedFormGroup;
  searchPhone: UntypedFormGroup;
  id: string;
  isAddMode: boolean;
  @ViewChild('modalButton') ModalTrigger: ElementRef;
  loading = false;
  tokenNo: string;
  imgResultAfterResizeMax: DataUrl = '';
  beatBox: any = [];
  lostTokenNo: string;
  searchTokens: any = [];
  primaryPhone: any = '';
  space = space;
  dataCount: number;
  imgResultMultiple: DataUrl[] = [];
  constructor(
    private fb: UntypedFormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private apiService: ApiService,
    private toastrService: ToastrService,
    private imageCompress: NgxImageCompressService
  ) {}

  ngOnInit() {
    this.searchPhone = this.fb.group({
      phoneNumber: [
        '',
        [
          Validators.required,
          Validators.min(1000000000),
          Validators.max(9999999999),
        ],
      ],
    });

    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
    // use FormBuilder to create a form group
    this.reportItemForm = this.fb.group({
      category: ['', Validators.required],
      location: ['', Validators.required],
      description: ['', Validators.required],
      image: [
        '',
        [this.isAddMode ? Validators.required : Validators.nullValidator],
      ],

      lostTokenId: [''],
      beatBoxDescription: ['', Validators.required],
      foundDateTime: ['', [Validators.required, this.dateRangeValidator]],
      status: ['Found', Validators.required],
    });
    if (!this.isAddMode) {
      this.loading = true;
      const data = forkJoin(
        this.apiService.get('getFoundItemById/' + this.id + '/'),
        this.apiService.get('getBeatBox/')
      );
      data.subscribe(
        (data) => {
          this.beatBox = data[1].data;
          // if (data.data['lostTokenId'])
          //   this.reportItemForm.get('lostTokenId')?.disable();
          data[0].data['category'] = data[0].data['categoryName'];
          this.imgResultMultiple = data[0].data['image']?.map(
            (data: any) => data.image
          );
          const foundDateTime = new Date(
            new Date(data[0].data['foundDateTime']).toString().split('GMT')[0] +
              ' UTC'
          )
            .toISOString()
            .split(':');
          data[0].data['foundDateTime'] =
            foundDateTime[0] + ':' + foundDateTime[1];
          this.reportItemForm.patchValue(data[0].data);
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
    } else this.getBeatBox();
  }
  get f() {
    return this.reportItemForm.controls;
  }
  get f2() {
    return this.searchPhone.controls;
  }
  getBeatBox() {
    this.loading = true;
    this.apiService.get('getBeatBox/').subscribe(
      (data) => {
        this.beatBox = data.data;
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

  searchPhoneNo(page: number) {
    this.isSubmitting = true;
    if (this.primaryPhone.toString().length != 10) return;
    this.loading = true;
    this.apiService
      .post('getLostItemByNumber/' + page + '/', {
        data: Base64.encode(JSON.stringify({ phoneNumber: this.primaryPhone })),
      })
      .subscribe(
        (data) => {
          this.dataCount = data.count;
          this.searchTokens = data.data.filter(
            (data: any) => (data.status = 'Open')
          );
          this.isSubmitting = false;
          this.loading = false;
          if (!this.dataCount)
            this.toastrService.warning(
              $localize`:@@common-warning-msg:No data found`,
              $localize`:@@common-warning-title:No Data`
            );
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
              this.reportItemForm.controls['image'].patchValue([
                ...this.imgResultMultiple,
                result,
              ]);
              this.imgResultMultiple.push(result);
            });
        });

        this.reportItemForm.patchValue({
          image: this.imgResultMultiple,
        });
      });
  }
  PageChange(event: any) {
    this.searchPhoneNo(event.pageIndex + 1);
  }
  setToken() {
    this.reportItemForm.controls['lostTokenId'].setValue(this.lostTokenNo);
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
        .post('postFoundItem/', {
          data: Base64.encode(JSON.stringify(data)),
        })
        .subscribe(
          (data) => {
            this.tokenNo = data.token;
            this.reportItemForm.reset();
            this.imgResultMultiple = [];
            this.loading = false;
            this.isSubmitting = false;

            this.ModalTrigger.nativeElement.click();
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
      this.apiService
        .put('updateFoundItemById/', {
          data: Base64.encode(JSON.stringify(data)),
        })
        .subscribe(
          (data) => {
            this.reportItemForm.reset();
            this.imgResultMultiple = [];
            this.loading = false;
            this.isSubmitting = false;

            this.ModalTrigger.nativeElement.click();
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
  navigateToList() {
    this.router.navigateByUrl('/lost/found-item');
  }
  private dateRangeValidator: ValidatorFn = (): {
    [key: string]: any;
  } | null => {
    let invalid = false;
    const from =
      this.reportItemForm && this.reportItemForm.get('foundDateTime')?.value;
    const to = new Date();
    if (from && to) {
      invalid =
        new Date(from).valueOf() > new Date(to).valueOf() ||
        new Date('2023-05-01').valueOf() > new Date(from).valueOf();
    }
    return invalid ? { invalidRange: true } : null;
  };
}
