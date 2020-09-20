import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }
  register(registerData)
  {
    return this.http.post(' https://my-json-server.typicode.com/ankitmandloi/fakeplaceHolder/users ', {
      method: 'POST',
      body: JSON.stringify(registerData),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })   
  }

}
