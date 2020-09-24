import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vieworders',
  templateUrl: './vieworders.component.html',
  styleUrls: ['./vieworders.component.css']
})
export class ViewordersComponent implements OnInit {
respo;
  constructor(  http: HttpClient, private router:Router) { 
    var currentUser= localStorage.getItem('token');
    var urrentUser=currentUser.substring(1)
    var urrentUse=urrentUser.slice(0,-1);
    var json1= JSON.parse(urrentUse);
  
    if(currentUser && currentUser.length!=4)
    { 
      
      http.get('https://localhost:44369/students/vieworders?username='+json1.username).subscribe
      (res=>{
       this.respo=res;
      }
      )
      
    }
    else{
      this.router.navigate(['/login'])
    }  
  }

  ngOnInit(): void {
  }
  

}
