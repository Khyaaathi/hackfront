import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BhaktaNiwasComponent } from './bhakta-niwas/bhakta-niwas.component';
import { HotelsComponent } from './hotels/hotels.component';
import { PanthaNiwasComponent } from './pantha-niwas/pantha-niwas.component';

const routes: Routes = [
  { path: '', redirectTo: 'pantha-nivas', pathMatch: 'full' },
  { path: 'hotels', component: HotelsComponent },
  { path: 'pantha-nivas', component: PanthaNiwasComponent },
  { path: 'bhakta-nivas', component: BhaktaNiwasComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotelsRoutingModule {}
