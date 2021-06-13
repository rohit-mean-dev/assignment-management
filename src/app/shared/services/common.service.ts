import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  apiErrors: any = {};
  toastConfiguration = {
    timeOut: 5000,
    positionClass: 'toast-bottom-right',
    easeTime: 500,
  };
  constructor(private toastr: ToastrService) {}

  showSuccess(message: string) {
    this.toastr.success(message, '', this.toastConfiguration);
  }

  showError(message: string) {
    this.toastr.error(message, '', this.toastConfiguration);
  }

  setApiErrors(form: FormGroup, errors: any) {
    if (Object.keys(errors).length) {
      this.apiErrors = errors;
      for (const key in errors) {
        form.controls[key]?.setErrors({ apiError: true });
      }
    }
  }
}
