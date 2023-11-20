import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../shared/entities/product';

@Component({
  selector: 'product-card',
  standalone: true,
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent{
  @Input() productId! : number;
  @Input({required: true}) productName! : string;
  @Input() productPrice : number = 0 ;
  @Input() productImageLocation : string = '';

  constructor() {}
}
