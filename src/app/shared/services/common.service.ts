import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  apiErrors: any = {};

  constructor() {}

  setApiErrors(form: FormGroup, errors: any) {
    if (Object.keys(errors).length) {
      this.apiErrors = errors;
      for (const key in errors) {
        form.controls[key]?.setErrors({ apiError: true });
      }
    }
  }
}
