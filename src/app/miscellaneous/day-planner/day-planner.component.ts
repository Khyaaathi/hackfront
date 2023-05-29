import { Component } from '@angular/core';
import { ApiService } from '../../core/services/api.service';
import { ToastrService } from 'ngx-toastr';
import { formatDate } from '../../core/util/format-date-util';

@Component({
  selector: 'app-day-planner',
  templateUrl: './day-planner.component.html',
  styleUrls: ['./day-planner.component.css'],
})
export class DayPlannerComponent {
  loading = false;
  tab = 'parking';
  parkingSpaces: any;
  currentDate = formatDate(new Date());
  ritual: any;
  ritualTime: any = [];
  foods: any = [];
  foodPage = 1;
  parkingPage = 1;
  foodCount: number = 0;
  parkingCount: number = 0;
  vehicleType = 'Bike';
  constructor(
    private apiService: ApiService,
    private toastrService: ToastrService
  ) {}
  ngOnInit() {
    this.getParkings(1);
  }
  refreshData() {
    this.getParkings(this.parkingPage);
  }
  foodPageChange(event: any) {
    this.foodPage = event.pageIndex + 1;
    this.getFoods(event.pageIndex + 1);
  }
  parkingPageChange(event: any) {
    this.parkingPage = event.pageIndex + 1;
    this.getParkings(event.pageIndex + 1);
  }
  getParkings(page: number) {
    this.loading = true;
    this.apiService.get('prkng/').subscribe(
      (data: any) => {
        this.parkingSpaces = data.data;
        this.parkingCount = data.count;
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
  getFoods(page: number) {
    this.loading = true;
    this.apiService
      .post('filterFoodDistribution/' + page + '/', {
        date: this.currentDate,
      })
      .subscribe(
        (data: any) => {
          this.foodCount = data.count;
          this.foods = data.data;
          this.loading = false;
        },
        (err: any) => {
          this.toastrService.error(
            $localize`:@@common-err-msg:Something Went Wrong`,
            $localize`:@@common-err-title:Server Error`
          );
          this.loading = false;
        }
      );
  }
  getRituals() {
    this.loading = true;
    this.apiService.get('getDayWiseRituals/').subscribe(
      (data: any) => {
        this.ritual = data.data.filter((item: any) => {
          return item.specialDay == true && item.date == this.currentDate;
        })[0];
        if (this.ritual)
          this.apiService
            .get('getRitualsById/' + this.ritual.dayWiseRitualId + '/')
            .subscribe(
              (data: any) => {
                this.ritualTime = data.data;
                this.loading = false;
              },
              (err: any) => {
                this.toastrService.error(
                  $localize`:@@common-err-msg:Something Went Wrong`,
                  $localize`:@@common-err-title:Server Error`
                );
                this.loading = false;
              }
            );
        else this.loading = false;
      },
      (err: any) => {
        this.toastrService.error(
          $localize`:@@common-err-msg:Something Went Wrong`,
          $localize`:@@common-err-title:Server Error`
        );
        this.loading = false;
      }
    );
  }
  filterDate() {
    if (this.tab == 'food') this.getFoods(this.foodPage);
    else if (this.tab == 'parking') this.getParkings(this.parkingPage);
    else if (this.tab == 'ritual') this.getRituals();
  }
}
