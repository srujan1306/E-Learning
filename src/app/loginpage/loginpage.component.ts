import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, RouterOutlet],
  templateUrl: './loginpage.component.html',
  styleUrl: './loginpage.component.scss',
})
export class LoginpageComponent {
  loginForm!: FormGroup;
  tokenGenerated = false;
  constructor(
    public loginService: LoginService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      username: '',
      password: '',
    });
  }

  userLogin() {
    // console.log(this.loginForm.value);
    this.loginService.login(this.loginForm.value).then((data) => {
      if (data.token) {
        localStorage.setItem('token', data.token);
        this.tokenGenerated = true;
        if (this.tokenGenerated) {
          this.router.navigate(['/allcourses']).then(() => {
            window.location.reload();
          });
        } else {
          this.router.navigate(['/login']);
        }
      } else {
        this.router.navigate(['/login']);
      }
    });
  }
}
