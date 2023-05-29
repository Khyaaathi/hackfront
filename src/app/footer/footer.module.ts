import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterRoutingModule } from './footer-routing.module';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { ImpContactsComponent } from './imp-contacts/imp-contacts.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [DisclaimerComponent, ImpContactsComponent],
  imports: [CommonModule, FooterRoutingModule, SharedModule],
})
export class FooterModule {}
