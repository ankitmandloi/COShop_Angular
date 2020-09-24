import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PlaceorderService {

  constructor(private http:HttpClient,private router:Router) { }
 
  placeorder(orderData)
  {
    console.log(orderData)
    return this.http.post('https://localhost:44369/students/PlaceOrder',orderData).subscribe(
      response=>{
        console.log(response)
        this.router.navigate(['/thankyou'])
      }
    )
  }  
  }


// placeorder(rupees,paise,RFirstname,Lastname,Address,city,State,pincode,country,Bfirstname,LastName,cc,cc2,email)
// {
//    this.orderData={"rupees":rupees,"paise":paise,"RFirstname":RFirstname,"Lastname":Lastname,"Address":Address,"city":city,"State":State,"pincode":pincode,"country":country,"Bfirstname":Bfirstname,"LastName":LastName,"cc":cc,"cc2":cc2,"email":email};
// }
