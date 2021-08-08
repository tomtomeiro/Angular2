export interface User{
  nombre: String,
  apellidos: String,
  edad: number
  
}

export interface GenerarGastos{
  cantidad: Number,
  fecha:  Date,
  tiposGastos: Array<Text>,
  descripcion: String
}
