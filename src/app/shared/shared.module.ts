import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { HeaderComponent } from './header/header.component';
// import { ListErrorsComponent } from './list-errors.component';
import { NavbarBackComponent } from './navbar-back/navbar-back.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
// import { NgxCaptchaModule } from 'ngx-captcha';
import { OdiaNumberPipe } from './odia-number.pipe';
import { FooterComponent } from './footer/footer.component';
import { PaginatorGotoComponent } from './paginator-goto/paginator-goto.component';
import { MatSelectModule } from '@angular/material/select';
import { NgOptimizedImage } from '@angular/common';
import { StatusPipe } from './status.pipe';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatNativeDateModule } from '@angular/material/core';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ToastrModule.forRoot({
      timeOut: 15000, // 15 seconds
      closeButton: true,
      progressBar: true,
    }),
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatInputModule,
    MatFormFieldModule,
    MatTabsModule,
    MatNativeDateModule,
    ScrollingModule,
    // NgxCaptchaModule,

    MatSelectModule,
    NgOptimizedImage,
  ],
  providers: [],
  declarations: [
    // ListErrorsComponent,
    HeaderComponent,
    NavbarBackComponent,
    OdiaNumberPipe,
    StatusPipe,
    FooterComponent,
    PaginatorGotoComponent,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HeaderComponent,
    NavbarBackComponent,
    ToastrModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatInputModule,
    MatFormFieldModule,
    MatTabsModule,
    MatNativeDateModule,
    ScrollingModule,
    // NgxCaptchaModule,
    OdiaNumberPipe,
    StatusPipe,
    FooterComponent,
    PaginatorGotoComponent,
    MatSelectModule,
    NgOptimizedImage,
  ],
})
export class SharedModule {}
