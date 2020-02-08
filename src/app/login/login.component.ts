import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor(private http:HttpClient,private router:Router){}
  ngOnInit() {
  }
  login(name,pass){
    let url = 'http://localhost:3000/api/v1/users/login';
    let req = {
        email: name,
        password: pass
    }
    console.log(req);
    this.http.post(url,req).subscribe(data=>{
      localStorage.removeItem('userData');
      localStorage.setItem('userData',JSON.stringify(data));
      this.router.navigate(['welcome/'+data['data']['userId']]);
    });
}
signup(){
    this.router.navigate(['signup']);
}
}
