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
    this.registerData={"Username":this.arr[0].viewModel,"Email":this.arr[1].viewModel,"Password":this.arr[2].viewModel,"Confirmpassword":this.arr[3].viewModel}
    this.reg.register(this.registerData).subscribe()
    this.router.navigate(['/login'])
  }
}

