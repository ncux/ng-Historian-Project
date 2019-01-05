import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoutingModule } from './routing.module';
import { MaterialModule } from './material.module';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { FormInputsComponent } from './form-inputs/form-inputs.component';
import { TablesComponent } from './tables/tables.component';
import { BarComponent } from './charts/bar/bar.component';
import { LineComponent } from './charts/line/line.component';


@NgModule({
  declarations: [
    AppComponent,
    FormInputsComponent,
    TablesComponent,
    BarComponent,
    LineComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ScrollingModule,
    RoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
