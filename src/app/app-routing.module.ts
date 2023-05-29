import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },

  {
    path: 'about',
    loadChildren: () =>
      import('./about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'facility',
    loadChildren: () =>
      import('./facilities/facilities.module').then((m) => m.FacilitiesModule),
  },
  {
    path: 'hotel',
    loadChildren: () =>
      import('./hotels/hotels.module').then((m) => m.HotelsModule),
  },
  {
    path: 'lost',
    loadChildren: () =>
      import('./lost-and-found/lost-and-found.module').then(
        (m) => m.LostAndFoundModule
      ),
  },
  {
    path: 'parking',
    loadChildren: () =>
      import('./parking/parking.module').then((m) => m.ParkingModule),
  },
  {
    path: 'yatra',
    loadChildren: () =>
      import('./schedule/schedule.module').then((m) => m.ScheduleModule),
  },
  {
    path: 'grievance',
    loadChildren: () => import('./sos/sos.module').then((m) => m.SosModule),
  },
  {
    path: 'etc',
    loadChildren: () =>
      import('./miscellaneous/miscellaneous.module').then(
        (m) => m.MiscellaneousModule
      ),
  },
  {
    path: 'footer',
    loadChildren: () =>
      import('./footer/footer.module').then((m) => m.FooterModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
