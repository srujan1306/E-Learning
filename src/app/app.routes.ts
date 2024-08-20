import { Routes } from '@angular/router';
import { AllcoursesComponent } from './allcourses/allcourses.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'allcourses',
    component: AllcoursesComponent,
  },
];
