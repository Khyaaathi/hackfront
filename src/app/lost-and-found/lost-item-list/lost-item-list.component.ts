import { Component } from '@angular/core';
import { FormGroup, UntypedFormBuilder } from '@angular/forms';
import { Base64 } from 'js-base64';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/core/services/api.service';
import { formatDate } from 'src/app/core/util/format-date-util';

@Component({
  selector: 'app-lost-item-list',
  templateUrl: './lost-item-list.component.html',
  styleUrls: ['./lost-item-list.component.css'],
})
export class LostItemListComponent {
  filterItemForm: FormGroup;
  filteredItems: any;
  filterFormData: any;
  items: any = [];
  loading = false;
  dataCount: number;
  page = 1;
  currentDate = formatDate(new Date());
  yesterdayDate = formatDate(
    new Date(new Date().setDate(new Date().getDate() - 1))
  );
  beforeYesterdayDate = formatDate(
    new Date(new Date().setDate(new Date().getDate() - 2))
  );
  filterDate = this.currentDate;
  constructor(
    private fb: UntypedFormBuilder,
    private apiService: ApiService,
    private toastrService: ToastrService
  ) {}
  ngOnInit() {
    this.getData(1);
    // use FormBuilder to create a form group
    this.filterItemForm = this.fb.group({
      categoryName: [''],
      status: [''],
      fromDate: [''],
      toDate: [''],
      token: [''],
      phoneNumber: [''],
    });
  }
  dateSelect(date: any) {
    this.filterDate = date;
    this.getData(1);
  }
  PageChange(event: any) {
    this.page = event.pageIndex + 1;
    if (
      !this.filterFormData?.categoryName &&
      !this.filterFormData?.status &&
      !this.filterFormData?.fromDate &&
      !this.filterFormData?.toDate &&
      !this.filterFormData?.token &&
      !this.filterFormData?.phoneNumber
    ) {
      this.getData(event.pageIndex + 1);
      return;
    } else this.filterData(event.pageIndex + 1);
  }
  getData(page: number) {
    this.loading = true;
    this.apiService
      .get('getLostItem/' + page + '/' + this.filterDate)
      .subscribe(
        (data) => {
          this.dataCount = data.count;
          this.items = data.data;
          this.filteredItems = [...this.items];
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
  refreshData() {
    this.getData(this.page);
  }
  filterData(page: number) {
    const currentDate = new Date(new Date().toString().split('GMT')[0] + ' UTC')
      .toISOString()
      .split(':');
    this.filterFormData = {
      categoryName: this.filterItemForm.controls['categoryName'].value,
      status: this.filterItemForm.controls['status'].value,
      fromDate: this.filterItemForm.controls['fromDate'].value
        ? this.filterItemForm.controls['fromDate'].value
        : '2023-05-01T00:00',
      toDate: this.filterItemForm.controls['toDate'].value
        ? this.filterItemForm.controls['toDate'].value
        : currentDate[0] + ':' + currentDate[1],
      token: this.filterItemForm.controls['token'].value,
      phoneNumber: this.filterItemForm.controls['phoneNumber'].value,
    };
    if (
      !this.filterFormData.categoryName &&
      !this.filterFormData.status &&
      !this.filterFormData.fromDate &&
      !this.filterFormData.toDate &&
      !this.filterFormData.token &&
      !this.filterFormData.phoneNumber
    ) {
      this.getData(1);
      return;
    }
    this.loading = true;
    this.apiService
      .post('/filterLostItem/' + page + '/', {
        data: Base64.encode(JSON.stringify(this.filterFormData)),
      })
      .subscribe(
        (data) => {
          this.filteredItems = data.data;
          this.dataCount = data.count;
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
