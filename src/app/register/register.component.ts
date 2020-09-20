import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private reg:RegisterService,private router:Router) { }

  ngOnInit(): void {
  }
  arr=[]
  appen(a)
  {
    this.arr.push(a);
  }
  registerData: Object;
  register()
  {
    this.registerData={"name":this.arr[0].viewModel,"email":this.arr[1].viewModel,"password":this.arr[2].viewModel,"confirmpassword":this.arr[3].viewModel}
    this.reg.register(this.registerData).subscribe(
                      result=>{
                                console.log(result)
                               })
    this.router.navigate(['/login'])
  }
}

