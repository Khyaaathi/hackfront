import { Component } from '@angular/core';

@Component({
  selector: 'app-imp-contacts',
  templateUrl: './imp-contacts.component.html',
  styleUrls: ['./imp-contacts.component.css'],
})
export class ImpContactsComponent {
  data = [
    {
      name: $localize`Railway Enquiry`,
      contact: `131/06752-226717`,
    },
    {
      name: $localize`Bus stand Enquiry`,
      contact: `06752-224461`,
    },
    {
      name: $localize`Jagannath Temple Office`,
      contact: `06752-222001/101`,
    },
    {
      name: $localize`Temple Administration`,
      contact: `06752-220100`,
    },
    {
      name: $localize`State Bank`,
      contact: `06752-220606/224116`,
    },
    {
      name: $localize`Foreign Registration Office`,
      contact: `06752-223940`,
    },
    {
      name: $localize`Fire Station`,
      contact: `06752-222101/101`,
    },
    {
      name: $localize`Police Control Room`,
      contact: 100,
    },
    {
      name: $localize`Town Police`,
      contact: `06752-222025`,
    },
    {
      name: $localize`Seabeach Police`,
      contact: `06752-222025`,
    },
    {
      name: $localize`GRP`,
      contact: `06752-222678`,
    },
    {
      name: $localize`District Head Medical`,
      contact: `102/06752-223742/222062`,
    },
    {
      name: $localize`CDMO`,
      contact: 9439994708,
    },
    {
      name: $localize`Additional CDMO`,
      contact: 9433999909,
    },
  ];
}
