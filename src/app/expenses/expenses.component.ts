import { Component, OnInit } from '@angular/core';
import {NgForm } from '@angular/forms';
import {Expense} from './expenses.module';
import { Location } from '@angular/common';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {
  expenses : Expense[]=[];
  expense: Expense={
    cantidad: 0,
    fecha: new Date(),
    tiposGastos:[],
    descripcion: ""
  }
  constructor(private location: Location) { }

  ngOnInit(): void {
  }
  onSubmit(fu: NgForm): void{
   
    const {cantidad,fecha,tiposGastos,descripcion}=fu.value
    this.expense={
      cantidad: cantidad,
      fecha: fecha,
      tiposGastos: tiposGastos,
      descripcion: descripcion
    
    }
    this.expenses.push(this.expense);
    
  }
  goBack(): void{
    this.location.back()
  }

}
