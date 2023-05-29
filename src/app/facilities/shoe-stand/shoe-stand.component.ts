import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-shoe-stand',
  templateUrl: './shoe-stand.component.html',
  styleUrls: ['./shoe-stand.component.css'],
})
export class ShoeStandComponent {
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
    this.apiService.get('getShoeStand/' + page + '/').subscribe(
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
