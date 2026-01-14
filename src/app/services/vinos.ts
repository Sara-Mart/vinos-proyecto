import { Injectable } from '@angular/core';

export interface Vino{
  id: number;
  nombre: string;
  descripcion: string;
  img:string;
}

@Injectable({
  providedIn: 'root',
})
export class Vinos {

  private vinos: Vino[]=[
    {
      "id":1,
      "nombre": "Sarmia Raíz",
      "descripcion": "",
      "img":""
    },
    {
      "id":2,
      "nombre": "Sarmia Raíz",
      "descripcion": "",
      "img":""
    },
    {
      "id":3,
      "nombre": "Sarmia Raíz",
      "descripcion": "",
      "img":""
    },
    
  ]; 

  getVinos():Vino[]{
    return this.vinos;
  }
  
}
