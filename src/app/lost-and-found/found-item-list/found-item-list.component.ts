import { Component } from '@angular/core';
import { FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Base64 } from 'js-base64';
import { ToastrService } from 'ngx-toastr';
import { forkJoin } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { UserService } from 'src/app/core/services/user.service';
import { formatDate } from 'src/app/core/util/format-date-util';

@Component({
  selector: 'app-found-item-list',
  templateUrl: './found-item-list.component.html',
  styleUrls: ['./found-item-list.component.css'],
})
export class FoundItemListComponent {
  filterItemForm: FormGroup;
  filteredItems: any;
  items = [];
  loading = true;
  dataCount: number;
  user: any;
  beatBox: any = [];
  filterFormData: any;
  hideFilter: boolean;
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
    private toastrService: ToastrService,
    private apiService: ApiService,
    private userService: UserService
  ) {}
  ngOnInit() {
    this.userService.currentUser.subscribe((data) => {
      this.user = data;
      this.hideFilter = Object.keys(data).length === 0;
      // this.getBeatBox();
    });
    this.getData(1);
    this.filterItemForm = this.fb.group({
      categoryName: [''],
      status: [''],
      fromDate: [''],
      toDate: [''],
      lostToken: [''],
      foundToken: [''],
      beatBoxId: [''],
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
      !this.filterFormData?.lostToken &&
      !this.filterFormData?.foundToken &&
      !this.filterFormData?.beatBoxId
    ) {
      this.getData(event.pageIndex + 1);
      return;
    }
    this.filterData(event.pageIndex + 1);
  }
  refreshData() {
    this.getData(this.page);
  }
  getData(page: number) {
    this.loading = true;
    const data = forkJoin(
      this.apiService.get('getFoundItem/' + page + '/' + this.filterDate),
      this.apiService.get('getBeatBox/')
    );
    data.subscribe(
      (data) => {
        this.beatBox = data[1].data;
        this.dataCount = data[0].count;
        this.items = data[0].data;
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
      lostToken: this.filterItemForm.controls['lostToken'].value,
      foundToken: this.filterItemForm.controls['foundToken'].value,
      beatBoxId: this.filterItemForm.controls['beatBoxId'].value,
    };
    if (
      !this.filterFormData.categoryName &&
      !this.filterFormData.status &&
      !this.filterFormData.fromDate &&
      !this.filterFormData.toDate &&
      !this.filterFormData.lostToken &&
      !this.filterFormData.foundToken &&
      !this.filterFormData.beatBoxId
    ) {
      this.getData(1);
      return;
    }
    this.loading = true;
    this.apiService
      .post('/filterFoundItem/' + page + '/', {
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
  // getBeatBox() {
  //   this.apiService.get('getBeatBox/').subscribe(
  //     (data) => {
  //       this.beatBox = data.data;
  //     },
  //     (err) => {
  //       this.toastrService.error(
  //         $localize`:@@common-err-msg:Something Went Wrong`,
  //         $localize`:@@common-err-title:Server Error`
  //       );
  //     }
  //   );
  // }
}
