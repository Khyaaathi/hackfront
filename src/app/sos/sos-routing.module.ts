import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportSosComponent } from './report-sos/report-sos.component';
import { SosListComponent } from './sos-list/sos-list.component';
import { AuthGuardService as AuthGuard } from '../core/services/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'report-grievance', pathMatch: 'full' },
  {
    path: 'grievance-list',
    component: SosListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'report-grievance',
    component: ReportSosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SosRoutingModule {}
