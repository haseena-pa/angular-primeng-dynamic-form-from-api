export interface FormField {
    data: FormFieldJSON[];
}

export interface FormFieldJSON {
    name: string;
    label: string;
    value: string;
    type: string;
    validators: ValidatorJSON;
    options: OptionJSON[];
}

interface ValidatorJSON {
    required?: boolean;
    email?: boolean;
    minLength?: boolean;
    maxLength?: boolean;
    pattern?: string;
}

interface OptionJSON {
    label: string;
    value: string;
}