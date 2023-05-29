import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParkingEntrygateComponent } from './parking-entrygate/parking-entrygate.component';
import { ParkingInfoComponent } from './parking-info/parking-info.component';
import { ParkingSpaceComponent } from './parking-space/parking-space.component';
import { AuthGuardService as AuthGuard } from '../core/services/auth-guard.service';
import { SelectParkingComponent } from './select-parking/select-parking.component';

const routes: Routes = [
  { path: '', redirectTo: 'parking-space', pathMatch: 'full' },
  {
    path: 'parking-gate/:id',
    component: ParkingEntrygateComponent,
  },
  { path: 'parking-info/:id', component: ParkingInfoComponent },
  { path: 'parking-space', component: ParkingSpaceComponent },
  { path: 'select-parking', component: SelectParkingComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParkingRoutingModule {}
