import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  standalone: true,
  imports: [ReactiveFormsModule],
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
      localStorage.setItem('token', data.token);
      this.tokenGenerated = true;
      if (this.tokenGenerated) {
        this.router.navigate(['/allcourses']);
      } else {
        this.router.navigate(['/login']);
      }
    });
  }
}
