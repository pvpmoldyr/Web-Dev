import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product-model';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})

export class ProductCardComponent {
  @Input() product!: Product;
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

}