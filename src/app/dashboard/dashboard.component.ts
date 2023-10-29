import { AuthenticationService } from '../services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  num1: number = 0;
  num2: number = 0;
  result: number = 0;

  constructor(private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {}

  
  mathAdd() {
    this.result = this.num1 + this.num2;
  }

  logout(): void {
    this.authenticationService.logout();
  }
}
