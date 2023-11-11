import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from './products.service';
import { Product } from '../shared/entities/product';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'products',
  standalone: true,
  imports: [
    CommonModule,
    ProductCardComponent
  ],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  
  productList : Product[] = [];
  
  constructor(private productsService: ProductsService){}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe( data =>{
      this.productList = data;
      console.log('productList =>', this.productList);
    });
  }
}