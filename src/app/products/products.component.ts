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
  error: any;
  sampleProduct = [
    {
      productId: 1,
      productName: 'product 1',
      productPrice: 111.99,
      productImageLocation: '/product1.jpg'
    },
    {
      productId: 2,
      productName: 'product 2',
      productPrice: 222.99,
      productImageLocation: '/product2.jpg'
    },
    {
      productId: 3,
      productName: 'product 3',
      productPrice: 3333.99,
      productImageLocation: '/product3.jpg'
    },
  ]
  
  constructor(private productsService: ProductsService){}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.productsService.getProducts().subscribe( data =>{
      // this.productList = data;
      // const { products } = data;
      console.log('data =>', data);
      // const { products } = data;
      // this.productList = data.products.map(d =>{
      //   return {
      //     productId: d.id,
      //     productName: d.title,
      //     productPrice: d.price,
      //     productImageLocation: d.thumbnail
      //   }
      // });
    },
    (error) =>{
      this.error = error;
    }

    );
  }
}
