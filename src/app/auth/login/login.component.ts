import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService, CommonService } from 'src/app/shared';
import { LoginRequest } from 'src/app/shared/models/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../auth.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  constructor(
    private authService: AuthService,
    public commonService: CommonService
  ) {}

  ngOnInit(): void {
    this.makeForm();
  }

  makeForm() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  login() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      const body: LoginRequest = this.form.value;
      this.authService.login(body).subscribe((res: any) => {
        console.log(res);
      });
    }
  }
}
