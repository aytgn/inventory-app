import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product-list/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  constructor() {
    this.product = {
      title: 'Red Shoes',
      info: 'Beautiful red shoes to play soccer by Nike',
      price: 100,
      department: 'Sport>Shoes>Soccer',
      imgPath: '../../assets/shoes.png',
    };
  }

  @Input() product: Product;

  ngOnInit(): void {}
}
