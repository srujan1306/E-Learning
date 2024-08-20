import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllcoursesComponent } from './allcourses/allcourses.component';
export interface Course {
  courseId: number;
  name: string;
  price: number;
  category: string;
  rating: number;
  instructor: string;
  description: string;
  prerequisites: string;
  imageUrl: string;
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, HomeComponent, AllcoursesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'E-Learning';
}
