import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterComponent } from './register/register.component';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }

    
  register(registerData)
  { 
    return this.http.post('https://localhost:44369/students/register',registerData)    
  }

}
