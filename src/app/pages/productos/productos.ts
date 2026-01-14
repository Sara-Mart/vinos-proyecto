import { Component } from '@angular/core';
import { Vino } from '../../services/vinos';
import { Vinos } from '../../services/vinos';

@Component({
  selector: 'app-productos',
  imports: [],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class ProductosComponent {

  vinos : Vino[] = [];

  constructor (private vino:Vinos){
    this.vinos= this.vino.getVinos();
  }


}
