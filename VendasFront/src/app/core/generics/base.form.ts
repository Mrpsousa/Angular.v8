import {FormGroup} from "@angular/forms";

export abstract class BaseForm {
    form: FormGroup;

    public abstract formErrors: Object;

    public abstract validationMessages: Object;

    public abstract submit();

    onValueChanged(data?: any) {
        if (!this.form) { return; }
        const form = this.form;

        for (const field in this.formErrors) {
            this.formErrors[field] = '';
            const control = form.get(field);

            if (control && control.dirty && !control.valid) {
                const messages = this.validationMessages[field];

                for (const key in control.errors) {
                    this.formErrors[field] = messages[key];
                    break;
                }
            }
        }
    }
}
