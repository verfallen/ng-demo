import { Directive, Input } from "@angular/core";
import { NG_VALIDATORS, Validator, AbstractControl } from "@angular/forms";

@Directive({
  selector: "[ChineseMobileValidator]",
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ChineseMobileValidatorDirective,
      multi: true
    }
  ]
})
export class ChineseMobileValidatorDirective implements Validator {
  @Input() ChineseMobileValidator: string;
  constructor() {}

  validate(control: AbstractControl): { [error: string]: any } {
    let val = control.value;
    let flag = /^1(3|4|5|7|8)\d{9}$/.test(val);
    console.log(flag);

    if (flag) {
      control.setErrors(null);
      return null;
    } else {
      control.setErrors({ ChineseMobileValidator: false });
      return { ChineseMobileValidator: false };
    }
  }
}
