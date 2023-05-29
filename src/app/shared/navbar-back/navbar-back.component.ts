import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-navbar-back',
  templateUrl: './navbar-back.component.html',
  styleUrls: ['./navbar-back.component.css'],
})
export class NavbarBackComponent {
  checked = document.documentElement.lang == 'en-US' ? false : true;
  user: any;
  @ViewChild('modalButton') ModalTrigger: ElementRef;
  @Input() inputUrl = '';
  constructor(
    private location: Location,
    private router: Router,
    private userService: UserService,
    private route: ActivatedRoute
  ) {}
  noHeader = false;
  ngOnInit() {
    this.userService.currentUser.subscribe((data) => {
      this.user = data;
    });
  }
  naviagteTo(data: string) {
    this.router.navigate([data]);
    this.ModalTrigger.nativeElement.click();
  }
  value = [true, false];
  changeLang(event: any) {
    var url = window.location.toString();
    if (event.target.checked)
      window.location.replace(url.replace('/en-US/', '/or/'));
    else window.location.replace(url.replace('/or/', '/en-US/'));
  }
  logout() {
    this.userService.purgeAuth();
    this.router.navigateByUrl('/home');
  }
}
