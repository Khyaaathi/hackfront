import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodDistributorListComponent } from './food-distributor-list/food-distributor-list.component';
import { MedicalDetailsComponent } from './medical-details/medical-details.component';
import { MedicalListComponent } from './medical-list/medical-list.component';
import { ShoeStandComponent } from './shoe-stand/shoe-stand.component';
import { ToiletsComponent } from './toilets/toilets.component';
import { WaterSpotComponent } from './water-spot/water-spot.component';

const routes: Routes = [
  { path: '', redirectTo: 'medical-list', pathMatch: 'full' },
  { path: 'medical-list', component: MedicalListComponent },
  { path: 'medical-details/:id', component: MedicalDetailsComponent },
  { path: 'food-distributor-list', component: FoodDistributorListComponent },
  { path: 'shoe-stand', component: ShoeStandComponent },
  { path: 'toilet', component: ToiletsComponent },
  { path: 'water-spot', component: WaterSpotComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FacilitiesRoutingModule {}
