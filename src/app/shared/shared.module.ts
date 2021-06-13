import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  LeftTrimFormControlDirective,
  NumericFormControlDirective,
} from './directives';
import { TrimFormControlDirective } from './directives/trim-form-control.directive';

@NgModule({
  declarations: [
    LeftTrimFormControlDirective,
    NumericFormControlDirective,
    TrimFormControlDirective,
  ],
  imports: [CommonModule],
  exports: [
    LeftTrimFormControlDirective,
    NumericFormControlDirective,
    TrimFormControlDirective,
  ],
})
export class SharedModule {}
