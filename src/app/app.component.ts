import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AppService } from './app.service';
import { FormField, FormFieldJSON } from './form-field';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  formFields: FormFieldJSON[] = []
  dynamicForm = this.fb.group({});

  constructor(private appService: AppService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getDynamicFormFields();
  }

  getDynamicFormFields() {
    this.appService.getFormFields().subscribe(
      (response: FormField) => {
        this.formFields = response.data;
        this.setDynamicForm(response.data);
      }
    )
  }

  setDynamicForm(controls: FormFieldJSON[]) {
    for (const control of controls) {
      const validators = [];
      if (control.validators?.required) {
        validators.push(Validators.required);
      }
      this.dynamicForm.addControl(control.name, this.fb.control(control.value, validators));
    }
  }

  saveForm() {
    console.log(this.dynamicForm.value);
  }

}
