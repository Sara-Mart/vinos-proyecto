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
}