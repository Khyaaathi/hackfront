import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { SharedModule } from '../shared/shared.module';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import { PlaceVisitComponent } from './place-visit/place-visit.component';
import { SpecialDaysComponent } from './special-days/special-days.component';
import { DaywiseRitualComponent } from './daywise-ritual/daywise-ritual.component';
import { TimewiseRitualComponent } from './timewise-ritual/timewise-ritual.component';

@NgModule({
  declarations: [
    DaywiseRitualComponent,
    GalleryComponent,
    AboutComponent,
    PlaceVisitComponent,
    SpecialDaysComponent,
    TimewiseRitualComponent,
  ],
  imports: [CommonModule, AboutRoutingModule, SharedModule],
})
export class AboutModule {}
