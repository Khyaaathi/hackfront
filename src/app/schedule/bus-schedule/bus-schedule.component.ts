import { Component } from '@angular/core';

@Component({
  selector: 'app-bus-schedule',
  templateUrl: './bus-schedule.component.html',
  styleUrls: ['./bus-schedule.component.css'],
})
export class BusScheduleComponent {
  inbound: boolean = true;
  outbound: boolean = false;
  filterInbound: any;
  filterOutbound: any;
  outboundDropdown: any;
  inboundDropdown: any;
  ngOnInit() {
    this.filterInbound = [...this.inboundData];
    this.filterOutbound = [...this.outboundData];
    this.outboundDropdown = [
      ...new Set(this.outboundData.map((item) => item.destination)),
    ].sort();
    this.inboundDropdown = [
      ...new Set(this.inboundData.map((item) => item.origin)),
    ].sort();
  }
  filterData(val: any) {
    if (this.outbound) {
      if (val.value)
        this.filterOutbound = this.outboundData.filter((data) => {
          return data.destination == val.value;
        });
      else this.filterOutbound = [...this.outboundData];
    } else {
      if (val.value)
        this.filterInbound = this.inboundData.filter((data) => {
          return data.origin == val.value;
        });
      else this.filterInbound = [...this.inboundData];
    }
  }
  'outboundData' = [
    {
      busName: 'OSRTC(Volvo 2+2)',
      departureTime: '4:00',
      arrivalTime: '5:30',
      destination: 'Cuttack',
    },
    {
      busName: 'OSRTC DELUX AC',
      departureTime: '2:30',
      arrivalTime: '5:51',
      destination: 'Khurda',
    },
    {
      busName: 'OSRTC DELUX AC',
      departureTime: '5:00',
      arrivalTime: '8:20',
      destination: 'Khurda',
    },
    {
      busName: 'Greenline (Volvo 2+2)',
      departureTime: '20:00',
      arrivalTime: '6:00',
      destination: 'Kolkata',
    },
    {
      busName: 'Dolphin tours and travel',
      departureTime: '20:14',
      arrivalTime: '7:34',
      destination: 'Kolkata',
    },
    {
      busName: 'Aryan Travels',
      departureTime: '20:15',
      arrivalTime: '7:15',
      destination: 'Kolkata',
    },
    {
      busName: 'Dolphin tours and travel',
      departureTime: '21:30',
      arrivalTime: '7:20',
      destination: 'Kolkata',
    },
    {
      busName: 'OSRTC(Volvo 2+2)',
      departureTime: '21:35',
      arrivalTime: '6:30',
      destination: 'Kolkata',
    },
    {
      busName: 'Shyamoli Paribahan',
      departureTime: '18:45',
      arrivalTime: '6:45',
      destination: 'Asansol (W.B.)',
    },
    {
      busName: 'Dolphin tours and travel',
      departureTime: '18:15',
      arrivalTime: '7:50',
      destination: 'Asansol (W.B.)',
    },
    {
      busName: 'Dolphin tours and travel',
      departureTime: '6:30',
      arrivalTime: '2:50',
      destination: 'Sambalpur',
    },
    {
      busName: 'Dolphin tours and travel',
      departureTime: '17:30',
      arrivalTime: '3:00',
      destination: 'Jharsuguda',
    },
    {
      busName: 'Kalia Kanhu (jagakalia)',
      departureTime: '18:00',
      arrivalTime: '5:30',
      destination: 'Rourkela',
    },
    {
      busName: 'Dolphin tours and travel',
      departureTime: '18:15',
      arrivalTime: '9:45',
      destination: 'Dhanbad (Jharkhand)',
    },
    {
      busName: 'Dolphin tours and travel',
      departureTime: '18:30',
      arrivalTime: '8:30',
      destination: 'Raipur(chattisgarh)',
    },
  ];
  inboundData = [
    {
      busName: 'OSRTC(Volvo 2+2)',
      departureTime: '5:00',
      arrivalTime: '6:30',
      origin: 'Cuttack',
    },
    {
      busName: 'OSRTC DELUX AC',
      departureTime: '2:30',
      arrivalTime: '5:51',
      origin: 'Khurda',
    },
    {
      busName: 'OSRTC DELUX AC',
      departureTime: '5:00',
      arrivalTime: '8:20',
      origin: 'Khurda',
    },
    {
      busName: 'OSRTC non AC',
      departureTime: '5:12',
      arrivalTime: '7:29',
      origin: 'Khurda',
    },
    {
      busName: 'OSRTC DELUX AC',
      departureTime: '14:55',
      arrivalTime: '21:46',
      origin: 'Brahmapur',
    },
    {
      busName: 'Greenline (Volvo 2+2)',
      departureTime: '20:15',
      arrivalTime: '6:00',
      origin: 'Kolkata',
    },
    {
      busName: 'Dolphin tours and travel',
      departureTime: '21:20',
      arrivalTime: '7:20',
      origin: 'Kolkata',
    },
    {
      busName: 'Shyamoli Paribahan',
      departureTime: ' 19:00',
      arrivalTime: '5:30',
      origin: 'Asansol (W.B.)',
    },
    {
      busName: 'Dolphin tours and travel',
      departureTime: '19:00',
      arrivalTime: '7:45',
      origin: 'Asansol (W.B.)',
    },
    {
      busName: 'Dolphin tours and travel',
      departureTime: '0:50',
      arrivalTime: '9:30',
      origin: 'Sambalpur',
    },
    {
      busName: 'Dolphin tours and travel',
      departureTime: '23:05',
      arrivalTime: '9:30',
      origin: 'Jharsuguda',
    },
    {
      busName: 'Kalia Kanhu (jagakalia)',
      departureTime: '21:00',
      arrivalTime: '6:30',
      origin: 'Rourkela',
    },
    {
      busName: 'Dolphin tours and travel',
      departureTime: '17:15',
      arrivalTime: '7:45',
      origin: 'Dhanbad (Jharkhand)',
    },
    {
      busName: 'Dolphin tours and travel',
      departureTime: '20:00',
      arrivalTime: '9:30',
      origin: 'Raipur(chattisgarh)',
    },
  ];
}
