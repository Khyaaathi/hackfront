import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-medical-details',
  templateUrl: './medical-details.component.html',
  styleUrls: ['./medical-details.component.css'],
})
export class MedicalDetailsComponent {
  medicalSpot: any;
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
    this.apiService.get('getMedicalFacilityById/' + this.id + '/').subscribe(
      (data: any) => {
        this.medicalSpot = data.data;
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
