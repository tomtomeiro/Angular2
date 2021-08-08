import { Component, Input, OnInit } from '@angular/core';
import { GenerarGastos, User} from '../users/users.module'

@Component({
  selector: 'app-users-table',//Componente
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {
  @Input() users: User[]=[];
  @Input() gastos: GenerarGastos[]=[]; 
 
  //Voy a recibir con un input una variable dataTable que va as ser un string
  constructor() { }

  ngOnInit(): void {
  }

}
