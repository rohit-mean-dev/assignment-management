import { Directive, ElementRef, HostListener } from '@angular/core';
import { FormControlName } from '@angular/forms';

@Directive({
  selector: '[appNumericFormControl]',
})
export class NumericFormControlDirective {
  constructor(
    private el: ElementRef,
    private formControlName: FormControlName
  ) {}

  @HostListener('input', ['$event']) onInputChange() {
    const initalValue = this.el.nativeElement.value;
    const updatedValue = initalValue.replace(/[^0-9]*/g, '');
    this.el.nativeElement.value = updatedValue;
    this.formControlName.control.patchValue(updatedValue);
  }
}
