import { Component, Input, Output,  EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product-model';

@Component({
  selector: 'app-product-item',
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})

export class ProductItemComponent {
  @Input() product!: Product;
  @Output() delete = new EventEmitter<number>();
  @Output() like = new EventEmitter<number>();
  
  encode(url: string) {
    return encodeURIComponent(url);
  }
  shareToWhatsApp() {
    const url = encodeURIComponent(this.product.link);
    window.open(`https://wa.me/?text=Check out this product ${url}`, '_blank');
  }

  shareToTelegram() {
    const url = encodeURIComponent(this.product.link);
    window.open(`https://t.me/share/url?url=${url}&text=${this.product.name}`, '_blank');
  }
  
  selectedImage: string = '';
  
  ngOnInit() {  
    this.selectedImage = this.product.image; 
  }
  
  changeImage(img: string) {
    this.selectedImage = img;
  }

  onLike() {
    this.like.emit(this.product.id);
  }

  onDelete() {
    if (confirm(`Вы уверены, что хотите удалить "${this.product.name}"?`)) {
      this.delete.emit(this.product.id);
  }

}
}