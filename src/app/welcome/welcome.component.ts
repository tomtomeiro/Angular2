import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { User } from '../users/users.module';
import { Expense } from '../expenses/expenses.module';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  @Input() users: User []=[];
  @Input() expenses: Expense[]=[];
  constructor(private location: Location) { }

  ngOnInit(): void {
  }
  goBack(): void{
    this.location.back()
  }
  
}
