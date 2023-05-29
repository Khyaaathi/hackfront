import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-medical-list',
  templateUrl: './medical-list.component.html',
  styleUrls: ['./medical-list.component.css'],
})
export class MedicalListComponent {
  items: any;
  loading: boolean;
  dataCount: number = 0;
  constructor(
    private apiService: ApiService,
    private toastrService: ToastrService
  ) {}
  ngOnInit() {
    this.getData(1);
  }
  PageChange(event: any) {
    this.getData(event.pageIndex + 1);
  }
  getData(page: number) {
    this.loading = true;
    this.apiService.get('getMedicalFacility/' + page + '/').subscribe(
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
