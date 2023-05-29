import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelsRoutingModule } from './hotels-routing.module';
import { HotelsComponent } from './hotels/hotels.component';
import { BhaktaNiwasComponent } from './bhakta-niwas/bhakta-niwas.component';
import { SharedModule } from '../shared/shared.module';
import { PanthaNiwasComponent } from './pantha-niwas/pantha-niwas.component';

@NgModule({
  declarations: [HotelsComponent, BhaktaNiwasComponent, PanthaNiwasComponent],
  imports: [CommonModule, HotelsRoutingModule, SharedModule],
})
export class HotelsModule {}
