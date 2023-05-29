import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-daywise-ritual',
  templateUrl: './daywise-ritual.component.html',
  styleUrls: ['./daywise-ritual.component.css'],
})
export class DaywiseRitualComponent {
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
        this.items = data.data.filter((item: any) => {
          return item.specialDay == true;
        });
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
  navigateTo(data: number) {
    this.router.navigate(['/about/time-wise-ritual/' + data + '/']);
  }
  checkDate(date: string) {
    return new Date(date).toDateString() == new Date().toDateString();
  }
}
