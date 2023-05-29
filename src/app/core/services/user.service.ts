import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, ReplaySubject } from 'rxjs';

import { ApiService } from './api.service';
import { JwtService } from './jwt.service';
import { User } from '../models/user.model';
import { map, distinctUntilChanged } from 'rxjs/operators';
import jwt_decode from 'jwt-decode';

@Injectable({ providedIn: 'root' })
export class UserService {
  private currentUserSubject = new BehaviorSubject<User>({} as User);
  public currentUser = this.currentUserSubject
    .asObservable()
    .pipe(distinctUntilChanged());

  public isAuthenticated = false;
  public role = 'General User';
  constructor(private apiService: ApiService, private jwtService: JwtService) {}

  // Verify JWT in localstorage with server & load user's info.
  // This runs once on application startup.
  populate() {
    // If JWT detected, attempt to get & store user's info
    if (this.jwtService.getToken()) {
      try {
        let data: any = jwt_decode(this.jwtService.getToken());
        data['token'] = this.jwtService.getToken();
        if (data.roleId && data.roleId == 1) data['role'] = 'Police';
        else if (data.roleId && data.roleId == 2) data['role'] = 'Parking';
        else if (data.roleId && data.roleId == 3) data['role'] = 'General User';
        this.setAuth(data);
      } catch (Error) {
        this.purgeAuth();
      }
    } else {
      // Remove any potential remnants of previous auth states
      this.purgeAuth();
    }
  }

  setAuth(user: User) {
    // Save JWT sent from server in localstorage
    this.jwtService.saveToken(user.token);
    // Set current user data into observable
    this.currentUserSubject.next(user);
    // Set isAuthenticated to true
    this.isAuthenticated = true;
    this.role = user.role;
    // try {
    //   console.log(jwt_decode(user.token));
    // } catch (Error) {
    //   console.log(Error);
    // }
  }

  purgeAuth() {
    // Remove JWT from localstorage
    this.jwtService.destroyToken();
    // Set current user to an empty object
    this.currentUserSubject.next({} as User);
    this.role = 'General User';
    // Set auth status to false
    this.isAuthenticated = false;
  }

  attemptAuth(credentials: string): Observable<User> {
    return this.apiService.post('login/', credentials).pipe(
      map((data) => {
        this.setAuth(data.data);
        return data.data;
      })
    );
  }
  attemptSignup(data: any): Observable<User> {
    return this.apiService.post('generalUserRegistration/', data).pipe(
      map((data) => {
        // this.setAuth(data);
        return data;
      })
    );
  }
  getCurrentUser(): User {
    return this.currentUserSubject.value;
  }

  // Update the user on the server (email, pass, etc)
  update(user: User): Observable<User> {
    return this.apiService.put('/user', { user }).pipe(
      map((data) => {
        // Update the currentUser observable
        this.currentUserSubject.next(data);
        return data;
      })
    );
  }
}
