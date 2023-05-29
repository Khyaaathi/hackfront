import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LostAndFoundRoutingModule } from './lost-and-found-routing.module';
import { LostItemListComponent } from './lost-item-list/lost-item-list.component';
import { SharedModule } from '../shared/shared.module';
import { ReportFoundItemComponent } from './report-found-item/report-found-item.component';
import { FoundItemListComponent } from './found-item-list/found-item-list.component';
import { ReportLostItemComponent } from './report-lost-item/report-lost-item.component';
import { SearchLostItemComponent } from './search-lost-item/search-lost-item.component';

@NgModule({
  declarations: [
    LostItemListComponent,
    ReportFoundItemComponent,
    FoundItemListComponent,
    ReportLostItemComponent,
    SearchLostItemComponent,
  ],
  imports: [CommonModule, LostAndFoundRoutingModule, SharedModule],
})
export class LostAndFoundModule {}
