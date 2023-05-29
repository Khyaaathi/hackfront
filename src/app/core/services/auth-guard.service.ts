// src/app/auth/auth-guard.service.ts
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRoute } from '@angular/router';
import { UserService } from './user.service';
@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(
    public auth: UserService,
    public router: Router,
    public route: ActivatedRoute
  ) {}
  canActivate(): boolean {
    if (!this.auth.isAuthenticated || this.auth.role != 'Police') {
      this.router.navigate(['/auth/login']);
      return false;
    }
    return true;
  }
}
