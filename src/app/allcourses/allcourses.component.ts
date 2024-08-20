import { Component } from '@angular/core';
import { CoursecardComponent } from '../coursecard/coursecard.component';
import { CourseService } from '../course.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-allcourses',
  standalone: true,
  imports: [CoursecardComponent, RouterLink],
  templateUrl: './allcourses.component.html',
  styleUrl: './allcourses.component.scss',
})
export class AllcoursesComponent {
  courses: any;
  constructor(private courseService: CourseService) {}
  ngOnInit() {
    this.loadCourses();
  }
  loadCourses() {
    this.courseService.getCourses().then((data) => {
      this.courses = data;
    });
  }
}
