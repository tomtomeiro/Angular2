import { Component, OnInit } from '@angular/core';
import { EmailValidator, NgForm } from '@angular/forms';
import { User, GenerarGastos } from './users.module';
import { Location } from '@angular/common';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  title="Hola mundo";
  dataTable="Estos son datos de la tabla";
  users: User[]=[];
  user: User ={
    nombre:"",
    apellidos:"",
    edad:0

  }
  gastos: GenerarGastos[]=[];
  gasto: GenerarGastos={
    cantidad: 0,
    fecha: new Date(),
    tiposGastos:[],
    descripcion: ""
  }
  constructor(private location: Location) { }

  ngOnInit(): void {
  }
  onSubmit(fu: NgForm): void{
    const{nombre,apellidos,edad}=fu.value
    console.log(fu.value)
    this.user={
      nombre: nombre,
      apellidos: apellidos,
      edad:edad
   
    }
    this.users.push(this.user);
    
    const {cantidad,fecha,tiposGastos,descripcion}=fu.value
    this.gasto={
      cantidad: cantidad,
      fecha: fecha,
      tiposGastos: tiposGastos,
      descripcion: descripcion
    
    }
    this.gastos.push(this.gasto);
    
  }
  goBack(): void{
    this.location.back()
  }
  

}
