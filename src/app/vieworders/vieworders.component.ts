import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vieworders',
  templateUrl: './vieworders.component.html',
  styleUrls: ['./vieworders.component.css']
})
export class ViewordersComponent implements OnInit {

  constructor(  http: HttpClient, private router:Router) { 
    var currentUser= localStorage.getItem('token');
    
    if(currentUser && currentUser.length!=4)
    { 
      http.get("https://my-json-server.typicode.com/ankitmandloi/fakeplaceHolder/users?id="+currentUser.charAt(7))
        .subscribe(response=>{
        console.log(response);
      })
    }
    else{
      this.router.navigate(['/login'])
    }  
  }

  ngOnInit(): void {
  }
  

}
