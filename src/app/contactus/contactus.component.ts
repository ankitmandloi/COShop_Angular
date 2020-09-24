import { Component, OnInit } from '@angular/core';
import { ContactUsService } from './../contact-us.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor(private contact: ContactUsService,private router:Router ) { }

  ngOnInit(): void {
    if(!localStorage.getItem('token'))
    {
      this.router.navigate(['/login'])
    }
  }
  arr=[]
  appen(a)
  {
    this.arr.push(a);
  }
  registerData: Object;
  register()
  {
    this.registerData={"name":this.arr[0].viewModel,"email":this.arr[1].viewModel,"issue":this.arr[2].viewModel}
    this.contact.contact(this.registerData)
    .subscribe(result=>{
                        console.log(result)
                        })
    this.router.navigate(['/aboutproduct'])
  }

}
