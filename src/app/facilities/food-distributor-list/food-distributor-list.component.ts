import { Component } from '@angular/core';
import { FormGroup, UntypedFormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-food-distributor-list',
  templateUrl: './food-distributor-list.component.html',
  styleUrls: ['./food-distributor-list.component.css'],
})
export class FoodDistributorListComponent {
  items: any;
  loading: boolean;
  filterItemForm: FormGroup;
  dataCount: number = 0;
  filterFoodData: any;
  constructor(
    private apiService: ApiService,
    private toastrService: ToastrService,
    private fb: UntypedFormBuilder
  ) {}
  ngOnInit() {
    this.getData(1);
    this.filterItemForm = this.fb.group({
      foodType: [''],
      location: [''],
      date: [''],
    });
  }
  PageChange(event: any) {
    if (
      !this.filterFoodData.foodType &&
      !this.filterFoodData.date &&
      !this.filterFoodData.location
    ) {
      this.getData(event.pageIndex + 1);
      return;
    } else this.filterData(event.pageIndex + 1);
  }
  getData(page: number) {
    this.loading = true;
    this.apiService.get('getFoodDistribution/' + page + '/').subscribe(
      (data: any) => {
        this.dataCount = data.count;
        this.items = data.data;
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
  filterData(page: number) {
    this.filterFoodData = {
      foodType: this.filterItemForm.controls['foodType'].value,
      date: this.filterItemForm.controls['date'].value,
      location: this.filterItemForm.controls['location'].value,
    };
    if (
      !this.filterFoodData.foodType &&
      !this.filterFoodData.date &&
      !this.filterFoodData.location
    ) {
      this.getData(1);
      return;
    }
    this.loading = true;
    this.apiService
      .post('filterFoodDistribution/' + page + '/', this.filterItemForm.value)
      .subscribe(
        (data: any) => {
          this.dataCount = data.count;
          this.items = data.data;
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
}
