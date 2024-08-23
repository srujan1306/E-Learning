import { ChangeDetectorRef, Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllcoursesComponent } from './allcourses/allcourses.component';
export interface Course {
  courseId: string;
  name: string;
  price: number;
  category: string;
  rating: number;
  instructor: string;
  description: string;
  prerequisites: string;
  imageUrl: string;
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, HomeComponent, AllcoursesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  tokenPresence: boolean = this.checkTokenPresence();
  constructor(private router: Router, private cdr: ChangeDetectorRef) {}

  refreshView() {
    this.cdr.detectChanges();
  }
  onLogout() {
    localStorage.removeItem('token');
    this.tokenPresence = this.checkTokenPresence();
  }

  private checkTokenPresence(): boolean {
    return !!localStorage.getItem('token');
  }
  refreshComponent(category: string) {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/categories', category]);
    });
  }
}
