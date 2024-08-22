import { Injectable } from '@angular/core';
import { Course } from './app.component';
import { NewCourse } from './course';
import { API } from './API';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor(private router: Router) {}
  getCourses(): Promise<Course> {
    return fetch(`${API}/Elearn`).then((res) => res.json());
  }
  getCourseById(courseId: string) {
    return fetch(`${API}/Elearn/${courseId}`, {
      method: 'GET',
      headers: {
        'x-auth-token': localStorage.getItem('token') as string,
      },
    }).then((res) => {
      if (res.status != 200) {
        this.router.navigate(['/login']);
        throw new Error('Not Authorized');
      }

      return res.json();
    });
  }
  delete_the_course(course_to_be_deleted: any) {
    return fetch(`${API}/Elearn/del/${course_to_be_deleted.courseId}`, {
      method: 'DELETE',
    }).then((res) => res.json());
  }
  addcourse(courseadd: NewCourse) {
    // this.movieList.push(newMovie);

    // Post
    // 1. method
    // 2. body - Data & JSON
    // 3. Header - JSON

    return fetch(`${API}/Elearn`, {
      method: 'POST',
      body: JSON.stringify(courseadd),
      headers: {
        'Content-type': 'application/json',
      },
    }).then((res) => res.json());
  }
}
