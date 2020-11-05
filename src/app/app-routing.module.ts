import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HealthyComponent } from './healthy/healthy.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ScienceComponent } from './science/science.component';
import { SportsComponent } from './sports/sports.component';
import { TechnologyComponent } from './technology/technology.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';


const routes: Routes = [
  {path:"entertainment",component:EntertainmentComponent},
  {path:"science",component:ScienceComponent},
  {path:"healthy",component:HealthyComponent},
  {path:"sports",component:SportsComponent},
  {path:"technology",component:TechnologyComponent},
  {path:"**",component:NotfoundComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
