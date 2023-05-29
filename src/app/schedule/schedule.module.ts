import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScheduleRoutingModule } from './schedule-routing.module';
import { BusScheduleComponent } from './bus-schedule/bus-schedule.component';
import { RailScheduleComponent } from './rail-schedule/rail-schedule.component';
import { AirScheduleComponent } from './air-schedule/air-schedule.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    BusScheduleComponent,
    RailScheduleComponent,
    AirScheduleComponent,
  ],
  imports: [CommonModule, ScheduleRoutingModule, SharedModule],
})
export class ScheduleModule {}
