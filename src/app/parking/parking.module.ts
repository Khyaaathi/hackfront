import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParkingRoutingModule } from './parking-routing.module';
import { ParkingInfoComponent } from './parking-info/parking-info.component';
import { ParkingEntrygateComponent } from './parking-entrygate/parking-entrygate.component';
import { ParkingSpaceComponent } from './parking-space/parking-space.component';
import { SharedModule } from '../shared/shared.module';
import { SelectParkingComponent } from './select-parking/select-parking.component';

@NgModule({
  declarations: [
    ParkingInfoComponent,
    ParkingEntrygateComponent,
    ParkingSpaceComponent,
    SelectParkingComponent,
  ],
  imports: [CommonModule, ParkingRoutingModule, SharedModule],
})
export class ParkingModule {}
