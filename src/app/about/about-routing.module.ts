import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PlaceVisitComponent } from './place-visit/place-visit.component';
import { SpecialDaysComponent } from './special-days/special-days.component';
import { DaywiseRitualComponent } from './daywise-ritual/daywise-ritual.component';
import { TimewiseRitualComponent } from './timewise-ritual/timewise-ritual.component';

const routes: Routes = [
  { path: '', redirectTo: 'brief', pathMatch: 'full' },
  { path: 'gallery', component: GalleryComponent },
  { path: 'ritual', component: DaywiseRitualComponent },
  { path: 'time-wise-ritual/:id', component: TimewiseRitualComponent },
  { path: 'special-days', component: SpecialDaysComponent },
  { path: 'brief', component: AboutComponent },
  { path: 'places-visit', component: PlaceVisitComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutRoutingModule {}
