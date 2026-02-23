import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product-model';
import { ProductItemComponent } from '../product-item/product-item.component'; 

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, ProductItemComponent], 
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() products: Product[] = [];
  @Input() categoryName: string = '';
  @Output() deleteProduct = new EventEmitter<number>();
  @Output() likeProduct = new EventEmitter<number>();

  onDeleteProduct(productId: number) {
    this.deleteProduct.emit(productId);
  }

  onLikeProduct(productId: number) {
    this.likeProduct.emit(productId);
  }
}