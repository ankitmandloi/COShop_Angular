import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  constructor(private http:HttpClient) { }
  contact(contactUsData){
    return this.http.post(' https://my-json-server.typicode.com/ankitmandloi/fakeplaceHolder/users ', {
      method: 'POST',
      body: JSON.stringify(contactUsData),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })   
  }
}
