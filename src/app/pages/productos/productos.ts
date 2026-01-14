import { Component } from '@angular/core';
import { Vino } from '../../services/vinos';
import { Vinos } from '../../services/vinos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  imports: [],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class ProductosComponent {

  vinos : Vino[] = [];

  constructor (private vino:Vinos, private router: Router){
    this.vinos= this.vino.getVinos();
  }

  verDetalle(id: number){
    this.router.navigate(['/productos',id]);
  }




}
