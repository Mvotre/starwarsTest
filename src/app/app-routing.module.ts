import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { DummyComponent } from './dummy/dummy.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { StarshipsComponent } from './starships/starships.component';
import { FilmsComponent } from './films/films.component';


const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'details', component: PersonDetailsComponent,
    children: [
      {path: '', component: DummyComponent},
      {path: 'vehicles', component: VehiclesComponent},
      {path: 'starships', component: StarshipsComponent},
      {path: 'films', component: FilmsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
