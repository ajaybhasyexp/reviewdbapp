import { Validator, AbstractControl, NG_VALIDATORS } from "@angular/forms";
import { Directive, Input } from "@angular/core";

@Directive({
    selector: "[appEqualValidator]",
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: EqualValidatorDirective,
        multi: true
    }]
})

export class EqualValidatorDirective implements Validator {
    @Input() appEqualValidator: string;
    validate(c: AbstractControl): { [key: string]: any; } | null {
        const controlToCompare = c.parent.get(this.appEqualValidator)
        if (controlToCompare && controlToCompare.value == c.value) return null;
        return { "notEqual": true }
    }
}