import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlaceorderService {

  constructor(private http:HttpClient) { }

  placeorder(orderData)
  {

     return this.http.post("https://my-json-server.typicode.com/ankitmandloi/fakeplaceHolder/users/", {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }) 
 






      
  }

}

// placeorder(rupees,paise,RFirstname,Lastname,Address,city,State,pincode,country,Bfirstname,LastName,cc,cc2,email)
// {
//    this.orderData={"rupees":rupees,"paise":paise,"RFirstname":RFirstname,"Lastname":Lastname,"Address":Address,"city":city,"State":State,"pincode":pincode,"country":country,"Bfirstname":Bfirstname,"LastName":LastName,"cc":cc,"cc2":cc2,"email":email};
// }
