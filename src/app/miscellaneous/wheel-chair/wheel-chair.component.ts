import { Component } from '@angular/core';

@Component({
  selector: 'app-wheel-chair',
  templateUrl: './wheel-chair.component.html',
  styleUrls: ['./wheel-chair.component.css'],
})
export class WheelChairComponent {
  places = [
    {
      name: 'Talabania bus-stand',
      open: '07:00:00',
      close: '22:00:00',
      location: 'Talabania bus-stand puri',
      phoneNo: 9830226235,
    },
    {
      name: 'Malatipatpur Bus-stand',
      open: '07:00:00',
      close: '22:00:00',
      location: 'Malatipatpur Bus-stand puri',
      phoneNo: 9830226235,
    },
    {
      name: 'Gundicha Temple',
      open: '07:00:00',
      close: '22:00:00',
      location: 'Gundicha Temple puri',
      phoneNo: 9830226235,
    },
    {
      name: 'Medical Square/Registration',
      open: '07:00:00',
      close: '22:00:00',
      location: 'Medical Square/Registration puri',
      phoneNo: 9830226235,
    },
  ];
}
