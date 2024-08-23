import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime, startWith, switchMap, catchError, of } from 'rxjs';
import { CourseService } from '../course.service';
import { SearchService } from '../search.service';
import { Router, RouterLink } from '@angular/router';
import { CoursecardComponent } from '../coursecard/coursecard.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-allcourses',
  standalone: true,
  imports: [
    CoursecardComponent,
    ReactiveFormsModule,
    RouterLink,
    FormsModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './allcourses.component.html',
  styleUrls: ['./allcourses.component.scss'],
})
export class AllcoursesComponent implements OnInit {
  courses: any; // Adjust type according to your data structure
  filteredCourses: any[] = []; // Adjust type according to your data structure
  searchForm!: FormGroup;
  isLoading = true;
  errorMessage: string | null = null;
  tokenPresence: boolean = this.checkTokenPresence();

  constructor(
    private searchService: SearchService,
    private fb: FormBuilder,
    private courseService: CourseService,
    private router: Router
  ) {
    this.searchForm = this.fb.group({
      searchCourse: [''],
    });
  }

  ngOnInit() {
    // Load courses initially
    this.loadCourses();

    // Set up the search functionality
    this.searchForm
      .get('searchCourse')
      ?.valueChanges.pipe(
        startWith(''),
        debounceTime(200),
        switchMap((searchTerm) => {
          if (searchTerm.trim() === '') {
            // If searchTerm is empty, return all courses
            return of(this.courses);
          } else {
            // Filter courses by name
            const filtered = this.filterCoursesByName(this.courses, searchTerm);
            return of(filtered);
          }
        }),
        catchError((error) => {
          // Handle the error
          console.error('Search error:', error);
          this.errorMessage =
            'An error occurred while searching. Please try again.';
          return of([]); // Return an empty array as fallback
        })
      )
      .subscribe((filteredCourses) => {
        this.filteredCourses = filteredCourses;
        console.log(this.filteredCourses);
      });
  }

  loadCourses() {
    this.courseService
      .getCourses()
      .then((data) => {
        this.courses = data;
        this.filteredCourses = this.courses; // Initialize filteredCourses with all courses
        this.isLoading = false; // Assuming loading ends when courses are fetched
      })
      .catch((error) => {
        console.error('Error loading courses:', error);
        this.errorMessage =
          'An error occurred while loading courses. Please try again.';
        this.isLoading = false;
      });
  }

  // Method to filter courses based on the search term
  private filterCoursesByName(courses: any[], searchTerm: string): any[] {
    return courses.filter((course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
  deleteCourse(course_to_be_deleted: any) {
    this.courseService
      .delete_the_course(course_to_be_deleted)
      .then(() => this.loadCourses());
  }
  private checkTokenPresence(): boolean {
    return !!localStorage.getItem('token');
  }
}
