import { Injectable } from '@angular/core';
import { Course } from './app.component';
const API = 'https://66b0acbf6a693a95b539b996.mockapi.io';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor() {}
  getCourses(): Promise<Course> {
    return fetch(`${API}/Elearn`).then((res) => res.json());
  }
  getCourseById(courseId: string) {
    return fetch(`${API}/Elearn/${courseId}`).then((res) => res.json());
  }
  delete_the_course(course_to_be_deleted: any) {
    return fetch(`${API}/Elearn/${course_to_be_deleted.courseId}`, {
      method: 'DELETE',
    }).then((res) => res.json());
  }
}
