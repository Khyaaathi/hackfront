import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirScheduleComponent } from './air-schedule/air-schedule.component';
import { BusScheduleComponent } from './bus-schedule/bus-schedule.component';
import { RailScheduleComponent } from './rail-schedule/rail-schedule.component';

const routes: Routes = [
  { path: '', redirectTo: 'air-schedule', pathMatch: 'full' },
  { path: 'rail-schedule', component: RailScheduleComponent },
  { path: 'bus-schedule', component: BusScheduleComponent },
  { path: 'air-schedule', component: AirScheduleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScheduleRoutingModule {}
