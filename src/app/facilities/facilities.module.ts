import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacilitiesRoutingModule } from './facilities-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MedicalDetailsComponent } from './medical-details/medical-details.component';
// import { FoodSpotComponent } from './food-spot/food-spot.component';
import { MedicalListComponent } from './medical-list/medical-list.component';
import { FoodDistributorListComponent } from './food-distributor-list/food-distributor-list.component';
import { ShoeStandComponent } from './shoe-stand/shoe-stand.component';
import { ToiletsComponent } from './toilets/toilets.component';
import { WaterSpotComponent } from './water-spot/water-spot.component';

@NgModule({
  declarations: [
    MedicalDetailsComponent,
    // FoodSpotComponent,
    MedicalListComponent,
    FoodDistributorListComponent,
    ShoeStandComponent,
    ToiletsComponent,
    WaterSpotComponent,
  ],
  imports: [CommonModule, FacilitiesRoutingModule, SharedModule],
})
export class FacilitiesModule {}
