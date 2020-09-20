import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }
  register(registerData)
  {
    return this.http.post(
      '/api/register', JSON.stringify(registerData))      
  }

}
