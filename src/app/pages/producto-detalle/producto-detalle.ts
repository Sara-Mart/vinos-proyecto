import { Component, inject } from '@angular/core';
import { RouterLink,ActivatedRoute } from '@angular/router';
import { Vino } from '../../services/vinos';
import { Vinos } from '../../services/vinos';

@Component({
  selector: 'app-producto-detalle',
  imports: [RouterLink],
  templateUrl: './producto-detalle.html',
  styleUrl: './producto-detalle.css',
})
export class ProductoDetalle {
  private route = inject(ActivatedRoute);
  id = this.route.snapshot.paramMap.get('id');

  private productoService = inject(Vinos);
  producto:any;
  constructor() {

    // Obtenemos el id de la URL
    const id = Number(this.route.snapshot.paramMap.get('id'));

    // Buscamos el producto en el service
    this.producto = this.productoService.getProductoById(id);
  }
}