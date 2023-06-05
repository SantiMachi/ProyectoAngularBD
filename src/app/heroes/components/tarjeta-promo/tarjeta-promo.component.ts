import { Component, Input } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-tarjeta-promo',
  templateUrl: './tarjeta-promo.component.html',
  styles: [`
  mat-card {
    margin-top: 20px
  }
`]
})
export class TarjetaPromoComponent{

  @Input() heroe!: Heroe;

}
