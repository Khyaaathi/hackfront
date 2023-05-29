import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Base64 } from 'js-base64';
import { ToastrService } from 'ngx-toastr';
import { first, of } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-search-lost-item',
  templateUrl: './search-lost-item.component.html',
  styleUrls: ['./search-lost-item.component.css'],
})
export class SearchLostItemComponent {
  isSubmitting = false;
  searchItemForm: UntypedFormGroup;
  @ViewChild('modalButton') ModalTrigger: ElementRef;
  filteredItems: any;
  loading = false;
  dataCount: number = 0;
  constructor(
    private fb: UntypedFormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private apiService: ApiService,
    private toastrService: ToastrService
  ) {}

  ngOnInit() {
    // use FormBuilder to create a form group
    this.searchItemForm = this.fb.group({
      searchType: ['lostItem', Validators.required],
      phoneNumber: [
        null,
        [
          Validators.required,
          Validators.min(1000000000),
          Validators.max(9999999999),
        ],
      ],
    });
  }
  get f() {
    return this.searchItemForm.controls;
  }
  PageChange(event: any) {
    this.submitForm(event.pageIndex + 1);
  }
  submitForm(page: number = 1) {
    let url = '';
    this.searchItemForm.value.searchType != 'lostItem'
      ? (url = 'getGrivanceByNumber/' + page + '/')
      : (url = 'getLostItemByNumber/' + page + '/');
    this.isSubmitting = true;
    this.apiService
      .post(url, {
        data: Base64.encode(JSON.stringify(this.searchItemForm.value)),
      })
      .subscribe(
        (data) => {
          this.dataCount = data.count;
          this.filteredItems = data.data;
          this.isSubmitting = false;
          if (!this.filteredItems)
            this.toastrService.warning(
              $localize`:@@common-warning-msg:No data found`,
              $localize`:@@common-warning-title:No Data`
            );
        },
        (err) => {
          this.toastrService.error(
            $localize`:@@common-err-msg:Something Went Wrong`,
            $localize`:@@common-err-title:Server Error`
          );
          this.isSubmitting = false;
        }
      );
    // console.log(this.searchItemForm.value);
  }
}
