import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BodyComponent } from './components/body/body.component';
import { LivestatheaderComponent } from './components/livestatheader/livestatheader.component';
import {AppRoutingModule , routingComponents} from './app-routing.module';
import { LivestatsidebarComponent } from './livestatsidebar/livestatsidebar.component';
import { BootstrappractiseComponent } from './bootstrappractise/bootstrappractise.component';
import {EmployeeService} from './employee.service' ;
import {HttpClientModule} from '@angular/common/http';
import { WireframeOneComponent } from './wireframe-one/wireframe-one.component';
import { WireframeTwoComponent } from './wireframe-two/wireframe-two.component';
import {GetdataService} from './getdata.service';
import { LomiShopComponent } from './lomi-shop/lomi-shop.component';
import { GraphsComponent } from './graphs/graphs.component';

@NgModule({
  declarations: [
    AppComponent,
   
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    BodyComponent,
    LivestatheaderComponent,
    routingComponents,
    LivestatsidebarComponent,
    BootstrappractiseComponent,
    WireframeOneComponent,
    WireframeTwoComponent,
    LomiShopComponent,
    GraphsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EmployeeService , GetdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
