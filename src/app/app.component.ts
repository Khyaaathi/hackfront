import { Component } from '@angular/core';
import { UserService } from './core/services/user.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  noHeader = false;
  constructor(private userService: UserService, private router: Router) {
    router.events.subscribe((val) => {
      this.userService.populate();
      // see also
      if (
        window.location.hash == '#/auth/login' ||
        window.location.hash == '#/home' ||
        window.location.hash == '#/auth/signup' ||
        window.location.hash == '#/auth/change-pwd'
      ) {
        this.noHeader = true;
      } else {
        this.noHeader = false;
      }
    });
  }
  ngOnInit() {}
  title = 'rathyatra_frontend';
}
