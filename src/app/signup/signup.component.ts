import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, RouterOutlet],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  signUpForm!: FormGroup;
  constructor(
    public loginService: LoginService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.signUpForm = this.fb.group({
      username: '',
      password: '',
    });
  }

  userSignUp() {
    // console.log(this.loginForm.value);
    this.loginService.signup(this.signUpForm.value).then((data) => {
      this.router.navigate(['/login']).then(() => {
        window.location.reload();
      });
    });
  }
}
