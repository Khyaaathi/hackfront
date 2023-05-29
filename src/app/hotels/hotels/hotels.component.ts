import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css'],
})
export class HotelsComponent {
  ratingFilter = new FormControl('');
  dataCount: number = 0;
  ratingList: any = [];
  ratingListKeys: any = [];
  page = 1;
  // [
  //   { number: 5, count: 0 },
  //   { number: 4, count: 0 },
  //   { number: 3, count: 0 },
  //   { number: 2, count: 0 },
  //   { number: 1, count: 0 },
  //   { number: 0, count: 0 },
  // ];
  ngOnInit() {
    this.getData(this.page);
    this.ratingFilter.valueChanges.subscribe((data: any) => {
      if (data.length == 0) this.getData(this.page);
      else this.filterData(data, this.page);
    });
  }
  items: any = [];
  filteredData: any;
  loading: boolean;
  constructor(
    private apiService: ApiService,
    private toastrService: ToastrService
  ) {}
  filterData(data: any, page: number) {
    this.loading = true;
    this.apiService
      .post('filterHotel/' + page + '/', { filter: data })
      .subscribe(
        (data) => {
          this.dataCount = data.count;
          this.filteredData = data.data;
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

    // data.forEach((rating: any) => {
    //   const data = [...this.items].filter((data) => {
    //     return data.starRating == rating.number;
    //   });
    //   this.filteredData = [...this.filteredData, ...data];
    // });
  }
  PageChange(event: any) {
    this.page = event.pageIndex + 1;
    if (this.ratingFilter.value?.length)
      this.filterData(this.ratingFilter.value, this.page);
    else this.getData(this.page);
  }
  getData(page: number) {
    this.loading = true;
    this.apiService.get('getHotels/' + page + '/').subscribe(
      (data) => {
        this.dataCount = data.count;
        this.items = data.data;
        this.filteredData = [...this.items];
        this.ratingList = data.starCount;
        this.ratingListKeys = Object.keys(this.ratingList);
        // this.ratingList[0].count = data.data.filter(
        //   (dataind: any) => dataind.starRating == 5
        // ).length;
        // this.ratingList[1].count = data.data.filter(
        //   (dataind: any) => dataind.starRating == 4
        // ).length;
        // this.ratingList[2].count = data.data.filter(
        //   (dataind: any) => dataind.starRating == 3
        // ).length;
        // this.ratingList[3].count = data.data.filter(
        //   (dataind: any) => dataind.starRating == 2
        // ).length;
        // this.ratingList[4].count = data.data.filter(
        //   (dataind: any) => dataind.starRating == 1
        // ).length;
        // this.ratingList[5].count = data.data.filter(
        //   (dataind: any) => dataind.starRating == 0
        // ).length;
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
