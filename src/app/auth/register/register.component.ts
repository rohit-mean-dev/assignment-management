import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService, DATA, CommonService } from 'src/app/shared';
import { RegisterRequest } from 'src/app/shared/models/auth';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../auth.scss'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  passwordVisible: boolean = false;
  confirmPasswordVisible: boolean = false;
  constructor(
    private authService: AuthService,
    public commonService: CommonService
  ) {}

  ngOnInit(): void {
    this.makeForm();
  }

  makeForm() {
    this.form = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        Validators.pattern(DATA.name),
        Validators.maxLength(50),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.pattern(DATA.name),
        Validators.maxLength(50),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.pattern(DATA.password),
        Validators.maxLength(50),
      ]),
      confirmPassword: new FormControl('', []),
    });
  }

  register() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      let body = this.form.value;
      delete body.confirmPassword;
      const finalBody: RegisterRequest = body;
      this.authService.register(finalBody).subscribe(
        (res: any) => {
          this.commonService.showSuccess(res.message);
        },
        (err) => {
          this.commonService.setApiErrors(
            this.form,
            err.error.validationErrors
          );
        }
      );
    }
  }
}
