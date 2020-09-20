import { tokenName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aboutproduct',
  templateUrl: './aboutproduct.component.html',
  styleUrls: ['./aboutproduct.component.css']
})
export class AboutproductComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
   
  }
  placeTheOrder()
  {
    if(tokenName.length==4)
    {
      this.router.navigate(['/login'])
    }
    else{
      this.router.navigate(['/placeorder'])
    }
  }

}
