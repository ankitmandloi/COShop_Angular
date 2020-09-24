import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router:Router) { }

username:string;
password:string;
checkbox:string;
arr=[];
  ngOnInit(): void {
  }

  appen(s)
  {
    this.arr.push(s);
  }
  invalidLogin: boolean;
  login()
  {
     this.authService.login(this.arr[0].viewModel,this.arr[1].viewModel)
    .subscribe(
      result=>{
         
        if(result )
        {
          localStorage.setItem('token',JSON.stringify(result)) 
          localStorage.setItem('currentUser',JSON.stringify(result) )
          this.router.navigate(['/placeorder'])
        }
        else
        { 
          this.invalidLogin=true;
        }
      }
    )
  }
  logout()
  {
    this.authService.logout();
  }

}
