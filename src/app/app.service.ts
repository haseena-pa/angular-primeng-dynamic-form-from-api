import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormField } from './form-field';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getFormFields(): Observable<FormField> {
    return this.http.get<FormField>('assets/formFields.json');
  }
}
