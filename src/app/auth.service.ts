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
  {//https://localhost:44369/students/login?uname=anshul&&pass=ankit
    this.cred= {"username": username ,"email":password}
    return this.http.get('https://localhost:44369/students/login?uname='+username+'&&pass='+password)       
  }

  logout()
  {
    localStorage.removeItem('token')
  }
}
