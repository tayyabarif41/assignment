import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import * as jquery from 'jquery';
import { CustomerComponent } from './pages/customer/customer.component';
import { CtiToolkitComponent } from './pages/cti-toolkit/cti-toolkit.component';
import { BillingStatusComponent } from './pages/billing-status/billing-status.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { SrHistoryComponent } from './pages/sr-history/sr-history.component';
import { ModernPerformanceDetailsComponent } from './pages/modern-performance-details/modern-performance-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LayoutComponent,
    HomeComponent,
    CustomerComponent,
    CtiToolkitComponent,
    BillingStatusComponent,
    ProductDetailComponent,
    SrHistoryComponent,
    ModernPerformanceDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
