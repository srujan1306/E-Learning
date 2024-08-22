import { Component } from '@angular/core';
import { CourseService } from '../course.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { CoursecardComponent } from '../coursecard/coursecard.component';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CoursecardComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
})
export class CategoryComponent {
  courses: any; // Adjust type according to your data structure
  filteredCourses: any[] = []; // Adjust type according to your data structure
  searchForm!: FormGroup;
  isLoading = true;
  errorMessage: string | null = null;
  constructor(
    public courseService: CourseService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.loadCourses();
  }
  loadCourses() {
    let category = this.route.snapshot.paramMap.get('category') as string;
    console.log(category);
    this.courseService.getCourses().then((data) => {
      this.courses = data;
      this.filteredCourses = this.filterCoursesByCategory(
        this.courses,
        category
      );
      this.isLoading = false;
    });
  }
  private filterCoursesByCategory(courses: any[], searchTerm: string): any[] {
    return courses.filter((course) =>
      course.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  deleteCourse(course_to_be_deleted: any) {
    this.courseService
      .delete_the_course(course_to_be_deleted)
      .then(() => this.loadCourses());
  }
}
