import { Component } from '@angular/core';

@Component({
  selector: 'app-place-visit',
  templateUrl: './place-visit.component.html',
  styleUrls: ['./place-visit.component.css'],
})
export class PlaceVisitComponent {
  places = [
    {
      location: 'Konark Sun Temple',
      place: $localize`:@@about-placeVisit-KonarkSunTemple:Konark Sun Temple`,
      inKm: 35,
    },
    {
      location: 'Balighai(Seabeach,Balukhanda Sanctuary)',
      place: $localize`:@@about-placeVisit-Balighai:Balighai(Seabeach,Balukhanda Sanctuary)`,
      inKm: 14,
    },
    {
      location: 'Beleswar',
      place: $localize`:@@about-placeVisit-Beleswar:Beleswar`,
      inKm: 17,
    },
    {
      location: 'Kuruma(Boudha Kirti)',
      place: $localize`:@@about-placeVisit-Kuruma:Kuruma(Boudha Kirti)`,
      inKm: 43,
    },
    {
      location: 'Ramachandi',
      place: $localize`:@@about-placeVisit-Ramachandi:Ramachandi`,
      inKm: 27,
    },
    {
      location: 'Kakatapur,maa mangala temple',
      place: $localize`:@@about-placeVisit-Kakatapur:Kakatapur,maa mangala temple`,
      inKm: 60,
    },
    {
      location: 'Chaurashi(Barahi devi mandira)',
      place: $localize`:@@about-placeVisit-Chaurashi:Chaurashi(Barahi devi mandira)`,
      inKm: 67,
    },
    {
      location: 'Astaranga',
      place: $localize`:@@about-placeVisit-Astaranga:Astaranga`,
      inKm: 70,
    },
    {
      location: 'Satapada',
      place: $localize`:@@about-placeVisit-Satapada:Satapada`,
      inKm: 50,
    },
    {
      location: 'Brahmagiri,Alaranath Mandira',
      place: $localize`:@@about-placeVisit-Brahmagiri:Brahmagiri,Alaranath Mandira`,
      inKm: 25,
    },
    {
      location: 'Manika Patna',
      place: $localize`:@@about-placeVisit-Manika:Manika Patna`,
      inKm: 40,
    },
    {
      location: 'Raghurajpur(Patachitra& Gotipua dance)',
      place: $localize`:@@about-placeVisit-Raghurajpur:Raghurajpur(Patachitra& Gotipua dance)`,
      inKm: 14,
    },
    {
      location: 'Sakhi Gopala Temple',
      place: $localize`:@@about-placeVisit-Sakhi:Sakhi Gopala Temple`,
      inKm: 17,
    },
    {
      location: 'Biswanath Pahada',
      place: $localize`:@@about-placeVisit-Biswanath:Biswanath Pahada`,
      inKm: 35,
    },
    {
      location: 'Barala Balunkeswar',
      place: $localize`:@@about-placeVisit-Barala:Barala Balunkeswar`,
      inKm: 25,
    },
    {
      location: 'Bhakta Dasia Bauri Pitha',
      place: $localize`:@@about-placeVisit-Baligaon:Baligaan(Bhakta Dasia bauri pitha)`,
      inKm: 69,
    },
    {
      location: 'Siruli Mahavir Temple',
      place: $localize`:@@about-placeVisit-Siruli:Siruli Mahavir Temple`,
      inKm: 17,
    },
    {
      location: 'Pipili(Applique work)',
      place: $localize`:@@about-placeVisit-Pipili:Pipili(Applique work)	`,
      inKm: 40,
    },
    {
      location: 'Blue Flag Beach puri',
      place: $localize`:@@about-placeVisit-blueFlag:Blue Flag Beach	`,
      inKm: 2,
    },
  ].sort((a, b) => a.inKm - b.inKm);
}
