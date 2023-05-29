import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-parking-info',
  templateUrl: './parking-info.component.html',
  styleUrls: ['./parking-info.component.css'],
})
export class ParkingInfoComponent {
  parkingDetails: any;
  id: string;
  loading = true;
  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private toastrService: ToastrService
  ) {}
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
}
