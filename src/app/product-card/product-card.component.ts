import { Component, Input } from '@angular/core';
import { Product } from '../shared/entities/product';

@Component({
  selector: 'product-card',
  standalone: true,
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product! : Product;
}
