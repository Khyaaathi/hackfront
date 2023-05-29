import { Component } from '@angular/core';

@Component({
  selector: 'app-pantha-niwas',
  templateUrl: './pantha-niwas.component.html',
  styleUrls: ['./pantha-niwas.component.css'],
})
export class PanthaNiwasComponent {
  data = [
    {
      place: `Panthanivas Puri`,
      name: $localize`Panthanivas Puri`,
      location: $localize`Panthanivas Puri,
      at/po-Konark, Puri-
      752111`,
      phone: '9078885530, 6752222562',
      imageUrl: 'assets/images/panthanivas-puri.jpg',
    },
    {
      place: `Yatranivas Konark`,
      name: $localize`Yatranivas Konark`,
      location: $localize`Yatranivas Konark,
      at/po-konark, Puri-
      752111`,
      phone: '9078885526, 6758236820',
      imageUrl: 'assets/images/yatri-nivas-konark.jpg',
    },
    {
      place: `Yatranivas Satpada`,
      name: $localize`Yatranivas Satpada`,
      location: $localize`Yatranivas Satpada,
      via- Bramhagiri, Puri-
      752001`,
      phone: '9438210562, 6752262077',
      imageUrl: 'assets/images/yatrinivas-satpada.jpg',
    },
    // {
    //   place: `Panthanivas Barkul`,
    //   name: $localize`Panthanivas Barkul`,
    //   location: $localize`Panthanivas Barkul,
    //   At/Po-Balugaon
    //   ,Khurda 752030`,
    //   phone: '9078885514',
    //   imageUrl: 'assets/images/pantha-nivas-barikul.jpg',
    // },

    // {
    //   place: `Panthanivas
    //   Bhubaneswar`,
    //   name: $localize`Panthanivas
    //   Bhubaneswar`,
    //   location: $localize`Panthanivas
    //   Bhubaneswar, Lewis
    //   Road, BBSR-751014`,
    //   phone: '9078885516 ,6742432515',
    //   imageUrl: 'assets/images/pantha-nivas-bbsr.jpg',
    // },
    // {
    //   place: `Panthanivas Cuttack`,
    //   name: $localize`Panthanivas Cuttack`,
    //   location: $localize`Panthanivas Cuttack,
    //   At/PO-Buxi bazar,
    //   Cuttack-753001`,
    //   phone: '9078885521 ,6712306916',
    //   imageUrl: 'assets/images/pancuttack.jpg',
    // },
    // {
    //   place: `Panthanivas Rambha`,
    //   name: $localize`Panthanivas Rambha`,
    //   location: $localize`Panthanivas Rambha,
    //   at/po-Rambha,
    //   Ganjam`,
    //   phone: '9437514896 ,6810278346',
    //   imageUrl: 'assets/images/pantha-nivas-rambha.jfif',
    // },
    // {
    //   place: `Panthanivas
    //   Paradeep`,
    //   name: $localize`Panthanivas
    //   Paradeep`,
    //   location: $localize`Panthanivas
    //   Paradeep, Near
    //   circuit house,
    //   Paradeep`,
    //   phone: '9078885529 ,6722222275',
    //   imageUrl: 'assets/images/panthanivas-paradeep.jpg',
    // },
  ];
}
