import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-parking-space',
  templateUrl: './parking-space.component.html',
  styleUrls: ['./parking-space.component.css'],
})
export class ParkingSpaceComponent {
  loading: boolean;
  parkingSpaces: any;
  dataCount: number = 0;
  page = 1;
  vehicleType = 'Bike';
  constructor(
    private apiService: ApiService,
    private toastrService: ToastrService
  ) {}
  ngOnInit() {
    this.getParking();
    // this.getData(1);
  }
  PageChange(event: any) {
    this.page = event.pageIndex + 1;
    this.getData(event.pageIndex + 1);
  }
  getParking() {
    this.loading = true;
    this.apiService.get('prkng/').subscribe(
      (data: any) => {
        this.parkingSpaces = data.data;
        // this.parkingSpaces = data.data.filter((item: any) => {
        //   return item.fourWheelerVacancy || item.twoWheelerVacancy;
        // });
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
  getData(page: number) {
    this.loading = true;
    this.apiService.get('getParking/' + page + '/').subscribe(
      (data: any) => {
        this.dataCount = data.count;
        this.parkingSpaces = data.data;
        // this.parkingSpaces = data.data.filter((item: any) => {
        //   return item.fourWheelerVacancy || item.twoWheelerVacancy;
        // });
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
  calcDistance(
    lat1: number,
    lon1: number,
    lat2 = 19.8074888606059,
    lon2 = 85.81639766745845
  ) {
    var R = 6371; // km
    var dLat = this.toRad(lat2 - lat1);
    var dLon = this.toRad(lon2 - lon1);
    var lat1 = this.toRad(lat1);
    var lat2 = this.toRad(lat2);

    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return d.toFixed(2);
  }
  toRad(Value: any) {
    return (Value * Math.PI) / 180;
  }
}
