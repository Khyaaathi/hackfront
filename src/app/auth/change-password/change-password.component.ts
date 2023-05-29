import { Component } from '@angular/core';
import {
  AbstractControl,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import Validation from '../signup/validation';
import { Base64 } from 'js-base64';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-chnage-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
})
export class ChangePasswordComponent {
  errors = false;
  isSubmitting = false;
  authForm: UntypedFormGroup;
  oldpasswordType = 'password';
  passwordType = 'password';
  confirmpasswordType = 'password';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private fb: UntypedFormBuilder,
    private toastrService: ToastrService
  ) {
    this.authForm = this.fb.group(
      {
        oldPassword: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(30),
          ],
        ],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(30),
          ],
        ],
        confirmPassword: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(30),
          ],
        ],
        // recaptcha: ['', Validators.required],
      },
      {
        validators: [Validation.match('password', 'confirmPassword')],
      }
    );
  }

  public theme: 'light' | 'dark' = 'light';
  public size: 'compact' | 'normal' = 'normal';
  public lang = 'en';
  public type: 'image' | 'audio';
  ngOnInit() {}
  get f() {
    return this.authForm.controls;
  }
  password(formGroup: UntypedFormGroup) {
    const password = formGroup.get('password');
    const confirmPassword = formGroup.get('confirmPassword');
    return password === confirmPassword ? null : { passwordNotMatch: true };
  }
  submitForm() {
    this.isSubmitting = true;

    // console.log(this.authForm.value);
    const data = this.authForm.value;
    this.userService
      .attemptSignup({
        data: Base64.encode(
          JSON.stringify({
            data: data,
          })
        ),
      })
      .subscribe(
        (data: any) => {
          this.toastrService.success(
            $localize`:@@common-success-msg:Data received`,
            $localize`:@@common-success-title:Success`
          );
          this.router.navigateByUrl('/auth/login');
        },
        (err: any) => {
          this.toastrService.error(
            $localize`:@@common-err-msg:Something Went Wrong`,
            $localize`:@@common-err-title:Server Error`
          );
          this.isSubmitting = false;
        }
      );
  }
}
