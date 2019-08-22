import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NavbarComponent} from './navbar/navbar.component';
import {UpdateDbInfoComponent} from './update-db-info/update-db-info.component';
import {CreateDbInfoComponent} from './create-db-info/create-db-info.component';
const routes: Routes = [
  {path:'updatedb',component:UpdateDbInfoComponent},
  {path:'index',component:NavbarComponent},
  {path:'createdb',component:CreateDbInfoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
