import { Routes } from '@angular/router';
import { AllcoursesComponent } from './allcourses/allcourses.component';
import { HomeComponent } from './home/home.component';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { CategoryComponent } from './category/category.component';
import { LoginpageComponent } from './loginpage/loginpage.component';

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
  {
    path: 'addcourse',
    component: AddcourseComponent,
  },
  {
    path: 'login',
    component: LoginpageComponent,
  },
  {
    path: 'categories/:category',
    component: CategoryComponent,
  },
  {
    path: '**',
    component: HomeComponent,
  },
];
