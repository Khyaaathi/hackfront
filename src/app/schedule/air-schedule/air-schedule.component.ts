import { Component } from '@angular/core';

@Component({
  selector: 'app-air-schedule',
  templateUrl: './air-schedule.component.html',
  styleUrls: ['./air-schedule.component.css'],
})
export class AirScheduleComponent {
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
  'inboundData' = [
    {
      flightName: 'AirAsia 15*541',
      departureTime: '5:25',
      arrivalTime: '6:35',
      origin: 'CCU(Kolkata)',
    },
    {
      flightName: 'IndiGo 6E368',
      departureTime: '4:55',
      arrivalTime: '7:05',
      origin: 'BLR(Bengaluru)',
    },
    {
      flightName: 'IndiGo 6E2064',
      departureTime: '5:15',
      arrivalTime: '7:20',
      origin: 'DEL(Delhi)',
    },
    {
      flightName: 'Vistara UK*543',
      departureTime: '5:40',
      arrivalTime: '7:40',
      origin: 'BOM(Mumbai)',
    },
    {
      flightName: 'AirAsia 15*711',
      departureTime: '5:35',
      arrivalTime: '7:45',
      origin: 'DEL(Delhi)',
    },
    {
      flightName: 'IndiGo 6E6242',
      departureTime: '6:25',
      arrivalTime: '8:00',
      origin: 'HYD(Hyderabad)',
    },
    {
      flightName: 'AirAsia 15*1567',
      departureTime: '6:50',
      arrivalTime: '8:50',
      origin: 'BLR(Bengaluru)',
    },
    {
      flightName: 'Vistara UK*785',
      departureTime: '7:00',
      arrivalTime: '9:05',
      origin: 'DEL(Delhi)',
    },
    {
      flightName: 'Vistara BA 5831',
      departureTime: '7:00',
      arrivalTime: '9:05',
      origin: 'DEL(Delhi)',
    },
    {
      flightName: 'Vistara UA 7748',
      departureTime: '7:00',
      arrivalTime: '9:05',
      origin: 'DEL(Delhi)',
    },
    {
      flightName: 'IndiGo 6E7623',
      departureTime: '7:40',
      arrivalTime: '9:15',
      origin: 'CCU(Kolkata)',
    },
    {
      flightName: 'IndiGo 6E377',
      departureTime: '10:10',
      arrivalTime: '11:05',
      origin: 'CCU(Kolkata)',
    },
    {
      flightName: 'IndiGo 6E269',
      departureTime: '9:25',
      arrivalTime: '11:20',
      origin: 'MAA(Chennai)',
    },
    {
      flightName: 'IndiGo 6E249',
      departureTime: '10:10',
      arrivalTime: '11:35',
      origin: 'PAT(Patna)',
    },
    {
      flightName: 'IndiGo 6E6096',
      departureTime: '9:35',
      arrivalTime: '12:00',
      origin: 'DEL(Delhi)',
    },
    {
      flightName: 'IndiGo 6E6911',
      departureTime: '10:35',
      arrivalTime: '12:10',
      origin: 'HYD(Hyderabad)',
    },
    {
      flightName: 'Vistara UK*787',
      departureTime: '10:30',
      arrivalTime: '12:40',
      origin: 'DEL(Delhi)',
    },
    {
      flightName: 'Singapur Airlines',
      departureTime: '10:30',
      arrivalTime: '12:40',
      origin: 'DEL(Delhi)',
    },
    {
      flightName: 'IndiGo 6E5301',
      departureTime: '10:45',
      arrivalTime: '12:55',
      origin: 'BOM(Mumbai)',
    },
    {
      flightName: 'IndiGo 6E6535',
      departureTime: '11:10',
      arrivalTime: '13:15',
      origin: 'BLR(Bengaluru)',
    },
    {
      flightName: 'AirAsia 15*319',
      departureTime: '12:35',
      arrivalTime: '13:45',
      origin: 'CCU(Kolkata)',
    },
    {
      flightName: 'AirAsia 15*1562',
      departureTime: '11:55',
      arrivalTime: '13:55',
      origin: 'BLR(Bengaluru)',
    },
    {
      flightName: 'IndiGo 6E7941',
      departureTime: '12:00',
      arrivalTime: '14:00',
      origin: 'IXD(Allahabad)',
    },
    {
      flightName: 'AirAsia 15*762',
      departureTime: '12:05',
      arrivalTime: '14:20',
      origin: 'BOM(Mumbai)',
    },
    {
      flightName: 'Alliance Air CD745',
      departureTime: '13:25',
      arrivalTime: '14:25',
      origin: 'VEJH(Jharsuguda)',
    },
    {
      flightName: 'IndiGo 6E314',
      departureTime: '15:00',
      arrivalTime: '16:55',
      origin: 'GOX(Goa)',
    },
    {
      flightName: 'IndiGo 6E7583',
      departureTime: '15:40',
      arrivalTime: '17:05',
      origin: 'CCU(Kolkata)',
    },
    {
      flightName: 'Alliance Air CD746',
      departureTime: '16:15',
      arrivalTime: '17:10',
      origin: 'RRK(Rourkela)',
    },
    {
      flightName: 'AirAsia 15*1563',
      departureTime: '16:10',
      arrivalTime: '17:25',
      origin: 'CCU(Kolkata)',
    },
    {
      flightName: 'IndiaOne AIR IOA 106',
      departureTime: '15:45',
      arrivalTime: '17:35',
      origin: 'IXW(Jamshedpur)',
    },
    {
      flightName: 'AirAsia 15*713',
      departureTime: '15:45',
      arrivalTime: '17:55',
      origin: 'DEL(Delhi)',
    },
    {
      flightName: 'IndiGo 6E5241',
      departureTime: '15:45',
      arrivalTime: '18:00',
      origin: 'BOM(Mumbai)',
    },
    {
      flightName: 'IndiaOne AIR IOA 104',
      departureTime: '16:35',
      arrivalTime: '18:20',
      origin: 'PYB(key-ore)',
    },
    {
      flightName: 'AirAsia 15*1455',
      departureTime: '16:25',
      arrivalTime: '18:25',
      origin: 'BLR(Bengaluru)',
    },
    {
      flightName: 'IndiGo 6E2206',
      departureTime: '16:20',
      arrivalTime: '18:35',
      origin: 'DEL(Delhi)',
    },
    {
      flightName: 'AirAsia 15*778',
      departureTime: '16:30',
      arrivalTime: '18:40',
      origin: 'DEL(Delhi)',
    },
    {
      flightName: 'IndiGo 6E168',
      departureTime: '17:30',
      arrivalTime: '18:55',
      origin: 'HYD(Hyderabad)',
    },
    {
      flightName: 'AirAsia 15*320',
      departureTime: '16:50',
      arrivalTime: '19:05',
      origin: 'PNQ(pune)',
    },
    {
      flightName: 'IndiGo 6E644',
      departureTime: '17:25',
      arrivalTime: '19:45',
      origin: 'AMD(Ahmedabad)',
    },
    {
      flightName: 'Vistara UK*781',
      departureTime: '17:50',
      arrivalTime: '19:55',
      origin: 'DEL(Delhi)',
    },
    {
      flightName: 'Vistara BA 5833',
      departureTime: '17:50',
      arrivalTime: '19:55',
      origin: 'DEL(Delhi)',
    },
    {
      flightName: 'Singapur Airlines',
      departureTime: '17:50',
      arrivalTime: '19:55',
      origin: 'DEL(Delhi)',
    },
    {
      flightName: 'Vistara UK*545',
      departureTime: '17:50',
      arrivalTime: '20:10',
      origin: 'BOM(Mumbai)',
    },
    {
      flightName: 'IndiGo 6E6173',
      departureTime: '18:50',
      arrivalTime: '20:25',
      origin: 'MAA(Chennai)',
    },
    {
      flightName: 'IndiGo 6E903',
      departureTime: '18:10',
      arrivalTime: '20:30',
      origin: 'BOM(Mumbai)',
    },
    {
      flightName: 'IndiGo 6E411',
      departureTime: '18:40',
      arrivalTime: '20:40',
      origin: 'BLR(Bengaluru)',
    },
    {
      flightName: 'IndiGo 6E2201',
      departureTime: '18:45',
      arrivalTime: '21:05',
      origin: 'DEL(Delhi)',
    },
    {
      flightName: 'Alliance Air CD721',
      departureTime: '19:35',
      arrivalTime: '21:10',
      origin: 'CCU(Kolkata)',
    },
    {
      flightName: 'IndiGo 6E7971',
      departureTime: '19:35',
      arrivalTime: '21:15',
      origin: 'VNS(Varanasi)',
    },
    {
      flightName: 'IndiGo 6E663',
      departureTime: '20:45',
      arrivalTime: '21:50',
      origin: 'CCU(Kolkata)',
    },
    {
      flightName: 'IndiGo 6E213',
      departureTime: '20:20',
      arrivalTime: '21:55',
      origin: 'HYD(Hyderabad)',
    },
  ];
  outboundData = [
    {
      flightName: 'IndiGo 512',
      departureTime: '01:25',
      arrivalTime: '02:25',
      destination: 'Visakhapatnam',
    },
    {
      flightName: 'Alliance Air 9601',
      departureTime: '08:20',
      arrivalTime: '10:20',
      destination: 'Port Blair',
    },
    {
      flightName: 'IndiGo 375',
      departureTime: '08:55',
      arrivalTime: '01:50',
      destination: 'Coimbatore',
    },
    {
      flightName: 'IndiGo 557',
      departureTime: '10:15',
      arrivalTime: '11:20',
      destination: 'Kolkata',
    },
    {
      flightName: 'IndiGo 512',
      departureTime: '01:25',
      arrivalTime: '04:25',
      destination: 'Chennai',
    },
    {
      flightName: 'IndiGo 265',
      departureTime: '07:25',
      arrivalTime: '8:55',
      destination: 'Hyderabad',
    },
    {
      flightName: 'IndiGo 492',
      departureTime: '01:55',
      arrivalTime: '03:55',
      destination: 'Bengaluru',
    },
    {
      flightName: 'IndiGo 257',
      departureTime: '01:15',
      arrivalTime: '03:40',
      destination: 'Mumbai',
    },
    {
      flightName: 'IndiGo 314',
      departureTime: '06:30',
      arrivalTime: '08:50',
      destination: 'Delhi',
    },
    {
      flightName: 'Air Asia 30',
      departureTime: '11:55',
      arrivalTime: '06:10',
      destination: 'Kuala Lumpur',
    },
    {
      flightName: 'Air India 338',
      departureTime: '03:45',
      arrivalTime: '08:15',
      destination: 'Bangkok',
    },
  ];
}
