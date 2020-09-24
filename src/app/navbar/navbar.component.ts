import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn=false;
  constructor(private authService: AuthService, private router: Router) { 
    this.isLoggedIn
    var token=localStorage.getItem('token')
    if(token!=null){
    if(token.length>4)
    {
      this.isLoggedIn=true;
    }
    else{
      this.isLoggedIn=false;
    }
  }

  }
  ngOnInit(): void {
    this.isLoggedIn=false;
    var token=localStorage.getItem('token')
    if(token!=null){
    if(token.length>4)
    {
      this.isLoggedIn=true;
    }
    else{
      this.isLoggedIn=false;
    }
  }
  }
  


logout()
{
  this.authService.logout();
  this.router.navigate(['/aboutproduct'])
}
}
