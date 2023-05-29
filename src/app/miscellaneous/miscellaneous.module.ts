import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiscellaneousRoutingModule } from './miscellaneous-routing.module';
import { DivyangaDarshanComponent } from './divyanga-darshan/divyanga-darshan.component';
import { WheelChairComponent } from './wheel-chair/wheel-chair.component';
import { DayPlannerComponent } from './day-planner/day-planner.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    DivyangaDarshanComponent,
    WheelChairComponent,
    DayPlannerComponent,
  ],
  imports: [CommonModule, MiscellaneousRoutingModule, SharedModule],
})
export class MiscellaneousModule {}
