import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImpContactsComponent } from './imp-contacts/imp-contacts.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';

const routes: Routes = [
  { path: 'contacts', component: ImpContactsComponent },
  { path: 'disclaimer', component: DisclaimerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FooterRoutingModule {}
