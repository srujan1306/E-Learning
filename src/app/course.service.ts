import { Injectable } from '@angular/core';
import { Course } from './app.component';
const API = 'https://66b0acbf6a693a95b539b996.mockapi.io';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor() {}
  getCourses(): Promise<Course> {
    return fetch(`${API}/E-learn`).then((res) => res.json());
  }
}
