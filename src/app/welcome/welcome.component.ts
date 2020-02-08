import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  data:any;
  constructor() { }

  ngOnInit() {
    this.data = JSON.parse(localStorage.getItem('userData'));
    console.log(this.data);
  }

}
