import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-timewise-ritual',
  templateUrl: './timewise-ritual.component.html',
  styleUrls: ['./timewise-ritual.component.css'],
})
export class TimewiseRitualComponent {
  ritualTime: any;
  id: string;
  loading = true;
  ritualName: string;
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
    this.apiService.get('getRitualsById/' + this.id + '/').subscribe(
      (data: any) => {
        this.ritualName = data.dayWiseRitualName;
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
  }
}
