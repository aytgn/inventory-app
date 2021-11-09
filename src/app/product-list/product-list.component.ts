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

  isSelected(product: Product) {
    if (!this.selectedProduct || !product) {
      return false;
    } else {
      if (product == this.selectedProduct) {
        return true;
      } else return false;
    }
  }

  onClick(product: Product) {
    this.onSelected.emit(product);
  }
}
