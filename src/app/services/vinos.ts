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

  private vinos: Vino[] =
[
  {
    "id": 1,
    "nombre": "Sarmia Raíz",
    "descripcion": "Evoca profundidad, origen y conexión con la tierra.",
    "img": "/img/1.png"
  },
  {
    "id": 2,
    "nombre": "Sarmia UMBRAL",
    "descripcion": "Un vino de carácter intenso, asociado al misterio y la transición.",
    "img": "/img/2.png"
  },
  {
    "id": 3,
    "nombre": "Sarmia ALBA",
    "descripcion": "Luminoso y fresco, perfecto para un blanco o un rosado.",
    "img": "/img/3.png"
  },
  {
    "id": 4,
    "nombre": "Sarmia Viento",
    "descripcion": "Inspirado en el viento y el paisaje, con identidad fuerte.",
    "img": "/img/4.png"
  },
  {
    "id": 5,
    "nombre": "Sarmia Origen",
    "descripcion": "Un vino que representa la esencia más pura de la bodega.",
    "img": "/img/5.png"
  },
  {
    "id": 6,
    "nombre": "Sarmia Eclipse",
    "descripcion": "Equilibrio entre luz y sombra, elegante y profundo.",
    "img": "/img/2.png"
  },
  {
    "id": 7,
    "nombre": "Sarmia Bruma",
    "descripcion": "Sutil y envolvente, con una expresión delicada.",
    "img": "/img/4.png"
  },
  {
    "id": 8,
    "nombre": "Sarmia Fuego",
    "descripcion": "Potente y expresivo, marcado por la intensidad.",
    "img": "/img/1.png"
  },
  {
    "id": 9,
    "nombre": "Sarmia Horizonte",
    "descripcion": "Amplio, equilibrado y con una gran proyección.",
    "img": "/img/5.png"
  },
  {
    "id": 10,
    "nombre": "Sarmia Nocturna",
    "descripcion": "Profundo y seductor, ideal para momentos especiales.",
    "img": "/img/3.png"
  }
];


  getVinos():Vino[]{
    return this.vinos;
  }
  
}
