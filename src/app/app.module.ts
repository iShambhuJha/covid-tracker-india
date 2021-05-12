import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { TabsSectionComponent } from './shared/tabs-section/tabs-section.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { MainSectionComponent } from './shared/main-section/main-section.component';
import { LayoutComponent } from './layout/layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { StatesComponent } from './states/states.component';
import { DistrictsComponent } from './districts/districts.component';
import { ResourcesComponent } from './resources/resources.component';
import { DataClientService } from './core/services/data-client.service';
import { HttpClientModule } from '@angular/common/http';
import "@angular/common/locales/global/en-IN";
import { VaccinationComponent } from './vaccination/vaccination.component';
import { FormsModule } from '@angular/forms';
import { CdkDetailRowDirective } from './shared/expand-row.directive';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    TabsSectionComponent,
    SidebarComponent,
    MainSectionComponent,
    LayoutComponent,
    StatesComponent,
    DistrictsComponent,
    ResourcesComponent,
    VaccinationComponent,
    CdkDetailRowDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    FormsModule,
    CdkTableModule,
    CdkTreeModule,
  ],
  providers: [DataClientService,
    { provide: LOCALE_ID, useValue: "en-IN" }],
  bootstrap: [AppComponent]
})
export class AppModule { }
