import { Routes } from '@angular/router';
import { AllcoursesComponent } from './allcourses/allcourses.component';
import { HomeComponent } from './home/home.component';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'allcourses',
    children: [
      {
        path: '',
        component: AllcoursesComponent,
      },
      {
        path: ':courseId',
        component: CoursedetailsComponent,
      },
    ],
  },
];
