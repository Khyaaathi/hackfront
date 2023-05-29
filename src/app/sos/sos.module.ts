import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SosRoutingModule } from './sos-routing.module';
import { SosListComponent } from './sos-list/sos-list.component';
import { ReportSosComponent } from './report-sos/report-sos.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ReportSosComponent, SosListComponent],
  imports: [CommonModule, SosRoutingModule, SharedModule],
})
export class SosModule {}
