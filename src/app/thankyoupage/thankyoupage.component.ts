import { Component, OnInit } from '@angular/core';
import { PlaceordersComponent } from './../placeorders/placeorders.component';
import { PlaceorderService } from './../placeorder.service';

@Component({
  selector: 'app-thankyoupage',
  templateUrl: './thankyoupage.component.html',
  styleUrls: ['./thankyoupage.component.css']
})
export class ThankyoupageComponent implements OnInit {
thankstoCustomer;
  constructor(public thankyouData1:PlaceorderService) { 
    this.thankstoCustomer=this.thankyouData1.thankyouData
   }

  ngOnInit(): void {
   
   }
 

}
