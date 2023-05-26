import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { OffresComponent } from './view/offres/offres.component';
import { ProfilesComponent } from './view/profiles/profiles.component';
import { QuestionsComponent } from './view/questions/questions.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'questions', component: QuestionsComponent},
  {path: 'offres', component: OffresComponent},
  {path: 'profils', component: ProfilesComponent},
  {path: 'cv', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
