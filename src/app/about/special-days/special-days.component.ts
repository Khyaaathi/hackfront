import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { filter } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-special-days',
  templateUrl: './special-days.component.html',
  styleUrls: ['./special-days.component.css'],
})
export class SpecialDaysComponent {
  items: any = [];
  loading = true;
  constructor(
    private apiService: ApiService,
    private toastrService: ToastrService,
    private router: Router
  ) {}
  ngOnInit() {
    this.getData();
  }
  getData() {
    this.apiService.get('getDayWiseRituals/').subscribe(
      (data: any) => {
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
  checkDate(date: string) {
    return new Date(date).toDateString() == new Date().toDateString();
  }
}
