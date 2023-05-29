import { inject, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService as AuthGuard } from '../core/services/auth-guard.service';
import { FoundItemListComponent } from './found-item-list/found-item-list.component';
import { LostItemListComponent } from './lost-item-list/lost-item-list.component';
import { ReportFoundItemComponent } from './report-found-item/report-found-item.component';
import { ReportLostItemComponent } from './report-lost-item/report-lost-item.component';
import { SearchLostItemComponent } from './search-lost-item/search-lost-item.component';

const routes: Routes = [
  { path: '', redirectTo: 'report-lost-item', pathMatch: 'full' },
  {
    path: 'lost-item',
    component: LostItemListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'report-found-item',
    component: ReportFoundItemComponent,
    canActivate: [AuthGuard],
    data: { role: 'police' },
  },
  {
    path: 'found-item',
    component: FoundItemListComponent,
  },
  {
    path: 'report-found-item/:id',
    component: ReportFoundItemComponent,
    canActivate: [AuthGuard],
  },
  { path: 'report-lost-item', component: ReportLostItemComponent },
  {
    path: 'report-lost-item/:id',
    component: ReportLostItemComponent,
    canActivate: [AuthGuard],
  },
  { path: 'search-lost-item', component: SearchLostItemComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LostAndFoundRoutingModule {}
