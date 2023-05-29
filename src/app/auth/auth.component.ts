import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  UntypedFormControl,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from '../core/services/user.service';
import { Base64 } from 'js-base64';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  authType: string = '';
  title: string = '';
  errors = false;
  isSubmitting = false;
  authForm: UntypedFormGroup;
  passwordType: string = 'password';
  show = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private fb: UntypedFormBuilder
  ) {
    // document.getElementById('footer')?.remove();
    // document.getElementById('header')?.remove();

    // use FormBuilder to create a form group
    this.authForm = this.fb.group({
      contactNumber: [
        '',
        [
          Validators.required,
          Validators.min(1000000000),
          Validators.max(9999999999),
        ],
      ],
      password: ['', Validators.required],
      // recaptcha: ['', Validators.required],
    });
  }
  public theme: 'light' | 'dark' = 'light';
  public size: 'compact' | 'normal' = 'normal';
  public lang = 'en';
  public type: 'image' | 'audio';
  ngOnInit() {}
  onClick() {
    if (this.passwordType === 'password') {
      this.passwordType = 'text';
      this.show = true;
    } else {
      this.passwordType = 'password';
      this.show = false;
    }
  }
  submitForm() {
    this.isSubmitting = true;
    const credentials = this.authForm.value;
    credentials['password'] = Base64.encode(credentials.password);
    this.userService.attemptAuth(credentials).subscribe(
      (data: any) => {
        if (data.role == 'Police')
          this.router.navigateByUrl('/grievance/grievance-list');
        else if (data.role == 'Parking')
          this.router.navigateByUrl(
            '/parking/parking-gate/' + data.parkingDetail
          );
        else if (data.role == 'General User')
          this.router.navigateByUrl('/about');
        else {
          this.errors = true;
          this.userService.purgeAuth();
          this.router.navigateByUrl('/auth/login');
        }
      },
      (err: any) => {
        this.errors = err;
        this.isSubmitting = false;
      }
    );
  }
  get f() {
    return this.authForm.controls;
  }
}
