import { Component } from '@angular/core';
import { Product } from './product-list/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  products: Product[];
  selectedProduct: Product;
  borderColor: string;

  constructor() {
    (this.borderColor = 'red'),
      (this.selectedProduct = {
        department: '',
        imgPath: '',
        info: '',
        price: 0,
        title: '',
      });
    this.products = [
      new Product(
        'Red Shoes',
        'Beautiful red shoes to play soccer by Nike',
        'Sport>Shoes>Soccer',
        100,
        '/assets/shoes.png'
      ),
      new Product(
        'NEAT JACKET',
        'Blue Jacket',
        '',
        109.99,
        '/assets/blue-jacket.jfif'
      ),
      new Product(
        'NICE HAT',
        'A Nice Black Hat',
        '',
        29.99,
        '/assets/black-hat.jpg'
      ),
    ];
  }

  productSelected(product: Product) {
    this.selectedProduct = product;
  }

  onClick(newBorderColor: string) {
    this.borderColor = newBorderColor;
  }
}
