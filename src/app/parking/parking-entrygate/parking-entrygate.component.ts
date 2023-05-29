import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/core/services/api.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-parking-entrygate',
  templateUrl: './parking-entrygate.component.html',
  styleUrls: ['./parking-entrygate.component.css'],
})
export class ParkingEntrygateComponent {
  parkingDetails: any;
  id: string;
  loading = true;
  veichle: string;
  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router,
    private auth: UserService,
    private toastrService: ToastrService
  ) {
    if (this.auth.role != 'Parking') {
      this.router.navigate(['/home']);
    }
  }
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getData();
  }
  getData() {
    this.loading = true;
    this.apiService.get('getParkingById/' + this.id + '/').subscribe(
      (data: any) => {
        this.parkingDetails = data.data;
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
    this.getData();
  }
  parkingUpdate(value: string) {
    if (!this.veichle) return;
    const capacity =
      this.parkingDetails.fourWheelerCapacity +
      this.parkingDetails.twoWheelerCapacity;
    const fourOccupied =
      this.parkingDetails.fourWheelerCapacity -
      this.parkingDetails.fourWheelerVacancy;
    const twoOccupied =
      this.parkingDetails.twoWheelerCapacity -
      this.parkingDetails.twoWheelerVacancy;
    if (!twoOccupied && value == 'true') return;
    if (!fourOccupied && value == 'true') return;
    if (
      this.parkingDetails.twoWheelerCapacity == twoOccupied &&
      this.veichle == 'twoWheeler' &&
      value == 'false'
    )
      return;
    if (
      this.parkingDetails.fourWheelerCapacity == fourOccupied &&
      this.veichle == 'fourWheeler' &&
      value == 'false'
    )
      return;
    this.loading = true;

    const data = {
      id: this.parkingDetails.parkingId,
      vehicleType: this.veichle,
      increase: value,
    };
    this.apiService.put('updateParkingById/', data).subscribe(
      (data: any) => {
        this.getData();
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
