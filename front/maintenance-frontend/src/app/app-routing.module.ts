import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PannesComponent } from './components/pannes/pannes.component';
import { EquipementsComponent } from './components/equipements/equipements.component';
import { TechniciensComponent } from './components/techniciens/techniciens.component';


const routes: Routes = [
  { path: 'pannes', component: PannesComponent },
  { path: 'equipements', component: EquipementsComponent },
  { path: 'techniciens', component: TechniciensComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
