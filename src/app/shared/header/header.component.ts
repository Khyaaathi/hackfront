import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  checked = document.documentElement.lang == 'en-US' ? false : true;
  changeLang(event: any) {
    var url = window.location.toString();
    if (event.target.checked)
      window.location.replace(url.replace('/en-US/', '/or/'));
    else window.location.replace(url.replace('/or/', '/en-US/'));
  }
}
