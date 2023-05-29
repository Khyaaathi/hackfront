import { Component } from '@angular/core';

@Component({
  selector: 'app-bhakta-niwas',
  templateUrl: './bhakta-niwas.component.html',
  styleUrls: ['./bhakta-niwas.component.css'],
})
export class BhaktaNiwasComponent {
  data = [
    {
      place: `Purushottam Bhakta Nivas`,
      name: $localize`Purushottam Bhakta Nivas`,
      location: $localize`Near Old Jail , Puri`,
      email: 'sjta.purushottambhaktaniwas@gmail.com',
      phone: '06752-222686',
      bookingUrl:
        'https://stayatpurijagannatha.in/bhaktanivas/hotel/purushottam-bhakta-nivas-17',
      imageUrl: 'assets/images/purusottam.jpg',
    },
    {
      place: `Neeladri Bhakta Nivas`,
      name: $localize`Neeladri Bhakta Nivas`,
      location: $localize`Near Town Police Station, Grand Road, Puri`,
      email: 'sjta.neeladribhaktaniwas@gmail.com',
      phone: '06752-252621/22/23',
      bookingUrl:
        'https://stayatpurijagannatha.in/bhaktanivas/hotel/neeladri-bhakta-nivas-15',
      imageUrl: 'assets/images/neeladri-bhakata-niwas.jpg',
    },
    {
      place: `Nilachala Bhakta And Yatri Nivas`,

      name: $localize`Nilachala Bhakta And Yatri Nivas`,
      location: $localize`In front of Town Police Station, Grand Road, Puri`,
      email: 'sjta.nilachalbhaktaniwas@gmail.com',
      phone: '06752-222053 / 224561/62',
      bookingUrl:
        'https://stayatpurijagannatha.in/bhaktanivas/hotel/nilachala-bhakta-and-yatri-nivas-16',
      imageUrl: 'assets/images/nilachala-bhakata-niwas.jpg',
    },
    {
      place: `Shree Gundicha Bhakta Nivas`,

      name: $localize`Shree Gundicha Bhakta Nivas`,
      location: $localize`Near Shree Gundicha Temple, Grand Road, Puri`,
      email: 'sjta.shreegundichabhaktaniwas@gmail.com',
      phone: '06752-233351/52/53',
      bookingUrl:
        'https://stayatpurijagannatha.in/bhaktanivas/hotel/shree-gundicha-bhakta-nivas-18',
      imageUrl: 'assets/images/shree-gundicha-bhakata-niwas.jpg',
    },
  ];
}
