import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Product } from './product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  @Input() products: Product[];
  @Input() selectedProduct: Product;
  @Output() onSelected: EventEmitter<Product>;

  constructor() {
    this.products = [];
    this.selectedProduct = {
      title: '',
      price: 0,
      info: '',
      imgPath: '',
      department: '',
    };
    this.onSelected = new EventEmitter();
  }

  ngOnInit(): void {}

  onClick(product: Product) {
    this.onSelected.emit(product);
  }
}
