import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PlaceorderService {

  constructor(private http:HttpClient,private router:Router) { }
thankyouData
  placeorder(orderData)
  {

     return this.http.post(' https://my-json-server.typicode.com/ankitmandloi/fakeplaceHolder/users ', {
    method: 'POST',
    body: JSON.stringify(orderData),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }).subscribe(response=>{
    this.thankyouData=response
    this.router.navigate(['/thankyou']) 
  })

   






      
  }

}

// placeorder(rupees,paise,RFirstname,Lastname,Address,city,State,pincode,country,Bfirstname,LastName,cc,cc2,email)
// {
//    this.orderData={"rupees":rupees,"paise":paise,"RFirstname":RFirstname,"Lastname":Lastname,"Address":Address,"city":city,"State":State,"pincode":pincode,"country":country,"Bfirstname":Bfirstname,"LastName":LastName,"cc":cc,"cc2":cc2,"email":email};
// }
