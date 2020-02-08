import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit() {
  }
  signUp(fn,ln,mb,em,pass){
      let url = "http://localhost:3000/api/v1/users/signup";
      let req = {
        firstName: fn,
        lastName: ln,
        mobileNumber: mb,
        email: em,
        password: pass
      }
      this.http.post(url,req).subscribe(data=>{
        console.log(data);
        localStorage.setItem('userData',JSON.stringify(data))
        this.router.navigate(['login']);
      })
  }

}
