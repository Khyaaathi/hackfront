import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DayPlannerComponent } from './day-planner/day-planner.component';
import { DivyangaDarshanComponent } from './divyanga-darshan/divyanga-darshan.component';
import { WheelChairComponent } from './wheel-chair/wheel-chair.component';

const routes: Routes = [
  { path: 'planner', component: DayPlannerComponent },
  { path: 'divyanga-darshan', component: DivyangaDarshanComponent },
  { path: 'wheel-chair', component: WheelChairComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiscellaneousRoutingModule {}
