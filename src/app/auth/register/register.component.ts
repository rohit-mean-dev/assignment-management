import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../auth.scss'],
})
export class RegisterComponent implements OnInit {
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
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', []),
    });
  }

  register() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      let body = this.form.value;
      delete body.confirmPassword;
      this.authService.register(body).subscribe(
        (res: any) => {
          console.log(res);
        },
        (err) => {
          // console.log(err.error.validationErrors);
          this.commonService.setApiErrors(
            this.form,
            err.error.validationErrors
          );
        }
      );
    }
  }
}
