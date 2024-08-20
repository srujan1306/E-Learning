import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CourseService } from '../course.service';
import { Router } from '@angular/router';
import { NewCourse } from '../course';

@Component({
  selector: 'app-addcourse',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    NgFor,
  ],
  templateUrl: './addcourse.component.html',
  styleUrl: './addcourse.component.scss',
})
export class AddcourseComponent {
  courseForm: FormGroup;
  constructor(
    public courseService: CourseService,
    private router: Router,
    private fb: FormBuilder
  ) {
    // formGroup -> formControlName
    this.courseForm = this.fb.group({
      name: '',
      price: '',
      category: '',
      rating: '',
      instructor: '',
      description: '',
      prerequisites: '',
      imageUrl: '',
    });
  }
  addCourse() {
    if (this.courseForm.value) {
      let courseadd: NewCourse = this.courseForm.value;

      this.courseService.addcourse(courseadd).then(() => {
        this.router.navigate(['allcourses']);
      });
    }
  }
  get name() {
    return this.courseForm.get('name');
  }
  get image() {
    return this.courseForm.get('image');
  }
  get rating() {
    return this.courseForm.get('rating');
  }
  get instructor() {
    return this.courseForm.get('instructor');
  }
  get description() {
    return this.courseForm.get('description');
  }
  get category() {
    return this.courseForm.get('category');
  }
}
