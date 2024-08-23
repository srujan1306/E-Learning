import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-coursecard',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    RouterLink,
    MatButtonModule,
    CurrencyPipe,
  ],
  templateUrl: './coursecard.component.html',
  styleUrl: './coursecard.component.scss',
})
export class CoursecardComponent {
  @Input() coursecard: any;
  @Input() courseId!: string;
  @Output() delete_the_course = new EventEmitter<any>();
  tokenPresence: boolean = this.checkTokenPresence();
  constructor(private router: Router, private route: ActivatedRoute) {}
  deleteCourse() {
    if (localStorage.getItem('token')) {
      this.delete_the_course.emit(this.coursecard);
    } else {
      this.router.navigate(['/login']);
    }
  }
  private checkTokenPresence(): boolean {
    return !!localStorage.getItem('token');
  }
}
