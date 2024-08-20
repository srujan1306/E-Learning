import { Component } from '@angular/core';
import { CoursecardComponent } from '../coursecard/coursecard.component';
import { CourseService } from '../course.service';
import { Router, RouterLink } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { SearchService } from '../search.service';
import { debounceTime, startWith, switchMap } from 'rxjs';

@Component({
  selector: 'app-allcourses',
  standalone: true,
  imports: [CoursecardComponent, ReactiveFormsModule, RouterLink, FormsModule],
  templateUrl: './allcourses.component.html',
  styleUrl: './allcourses.component.scss',
})
export class AllcoursesComponent {
  courses: any;
  filteredCourses: any;
  searchForm!: FormGroup;
  searchTerm: string = '';
  isLoading = true;
  constructor(
    private searchService: SearchService,
    private fb: FormBuilder,
    private courseService: CourseService,
    private router: Router
  ) {
    this.searchForm = this.fb.group({ searchCourse: '' });
  }
  ngOnInit() {
    // this.loadCourses();
    this.searchForm
      .get('searchCourse')
      ?.valueChanges.pipe(
        startWith(''),
        debounceTime(200),
        switchMap((searchTerm) => this.searchService.searchCourse(searchTerm))
      )
      .subscribe((data) => {
        console.log(data);
        this.filteredCourses = data;
      });
  }
  loadCourses() {
    this.courseService.getCourses().then((data) => {
      this.courses = data;
      this.filteredCourses = this.courses;
    });
  }
}
