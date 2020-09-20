import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient ) { }
cred:Object;
query: String;
  login(username,password)
  {
    this.cred= {"username": username ,"password":password}
    return this.http.get('https://my-json-server.typicode.com/ankitmandloi/fakeplaceHolder/users?id='+username+'&&name='+password);      
  }

  logout()
  {
    localStorage.removeItem('token')
  }
}
