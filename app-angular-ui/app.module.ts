import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UpdateDbInfoComponent } from './update-db-info/update-db-info.component';
import { CreateDbInfoComponent } from './create-db-info/create-db-info.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UpdateDbInfoComponent,
    CreateDbInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
