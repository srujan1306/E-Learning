import { Component } from '@angular/core';
import { CourseService } from '../course.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-coursedetails',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './coursedetails.component.html',
  styleUrl: './coursedetails.component.scss',
})
export class CoursedetailsComponent {
  course: any;
  isLoading: boolean = true;
  msg = '';

  constructor(
    public courseService: CourseService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    let courseId = this.route.snapshot.paramMap.get('courseId') as string; // From URL
    this.courseService
      .getCourseById(courseId)
      .then((data) => {
        this.course = data;
        this.isLoading = false;
      })
      .catch(() => {
        this.isLoading = false;
        this.msg = 'Something went wrong';
      });
  }
}
