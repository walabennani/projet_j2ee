import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EquipementsComponent } from './components/equipements/equipements.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TechniciensComponent } from './components/techniciens/techniciens.component';
import { PannesComponent } from './components/pannes/pannes.component';

@NgModule({
  declarations: [
    AppComponent,
    EquipementsComponent,
    TechniciensComponent,
    PannesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
