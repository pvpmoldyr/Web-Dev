import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product-model';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {
  products: Product[] = [
      {
        id: 1,
        name: 'Ноутбук Castom E157D 15.6" / 16 Гб / SSD 1000 Гб / Win 11',
        description: 'Castom E157D — универсальный ноутбук для работы, учебы и развлечений, сочетающий в себе мощный процессор AMD Ryzen 5, быстрый SSD-накопитель и яркий IPS-экран.',
        price: 249900,
        rating: 4.9,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p32/pf7/64711809.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/p32/pf7/64711809.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/pb0/p7c/63008956.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p77/p7c/63008958.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/castom-e157d-15-6-16-gb-ssd-1000-gb-win-11-101725124-145214483/?c=750000000'
      },
      {
          id: 2,
          name: 'Ноутбук Lenovo LOQ 15.6" / 16 Гб / SSD 512 Гб / Без ОС / 15IAX9',
          description: 'Lenovo LOQ 15IAX9 (83GS005NRK) — это игровой ноутбук с 15,6-дюймовым Full HD IPS-экраном (144 Гц), процессором Intel Core i5-12450HX, 16 ГБ оперативной памяти DDR5, 512 ГБ SSD-накопителем и дискретной видеокартой NVIDIA GeForce RTX 3050 с 6 ГБ видеопамяти',
          price: 469998,
          rating: 4.98,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/p59/p53/15221547.jpg?format=gallery-medium',
          images: [
            'https://resources.cdn-kaspi.kz/img/m/p/p59/p53/15221547.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p1a/p56/15221551.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/pa7/p56/15221556.jpg?format=gallery-medium'
          ],
          link: 'https://kaspi.kz/shop/p/lenovo-loq-15-6-16-gb-ssd-512-gb-bez-os-15iax9-83gs005nrk-120581412/?c=750000000'
        },
        {
          id: 3,
          name: 'Ноутбук HYDRA Home Razor R5 15.6" / 16 Гб / SSD 512 Гб / Win 11',
          description: 'Ноутбук HYDRA Razor R5 — это мощное устройство для работы и учебы, которое сочетает в себе высокую производительность, стильный дизайн и удобство использования. ',
          price: 230000,
          rating: 4.7,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/p99/pc8/39543675.jpg?format=gallery-medium',
          images: [
            'https://resources.cdn-kaspi.kz/img/m/p/p61/pc8/39543677.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p29/pc8/39543679.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/pbd/pc5/39543680.jpg?format=gallery-medium'
          ],
          link: 'https://kaspi.kz/shop/p/hydra-home-razor-r5-15-6-16-gb-ssd-512-gb-win-11-h31-138766585/?c=750000000'
        },
        {
          id: 4,
          name: 'Aq-Jol подставка для ноутбука Cold 360',
          description: '💻 Подставка для ноутбука Aq-Jol — стиль, охлаждение и комфорт! ❄️Работай и учись с удовольствием!',
          price: 11500,
          rating: 5.0,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/p87/p2f/60859560.jpeg?format=gallery-medium',
          images: [
            'https://resources.cdn-kaspi.kz/img/m/p/p1e/p2c/60859561.jpeg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p77/p1e/60859565.jpeg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p4a/p25/60859563.jpeg?format=gallery-medium'
          ],
          link: 'https://kaspi.kz/shop/p/aq-jol-cold-360-141705222/?c=750000000'
        },
        {
          id: 5,
          name: 'LINEUP i5-14400 / RTX 5060 8 Гб / 32 Гб / SSD 1000 Гб / Win 11 Pro',
          description: 'Полный комплект ПК — всё, что нужно для игр и работы!⚡ Мощный Intel Core i5‑14400 🎮 RTX 5060 — плавная графика в новых играх 💾 32 ГБ RAM + SSD 1 ТБ — быстрый запуск игр и программ',
          price: 679000,
          rating: 5.0,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/p68/p43/45177693.jpg?format=gallery-medium',
          images: [
            'https://resources.cdn-kaspi.kz/img/m/p/pc3/p27/98411368.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p1a/p27/98411362.png?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p53/p27/98411364.png?format=gallery-medium'
          ],
          link: 'https://kaspi.kz/shop/p/lineup-5060140222-chernyi-140465557/?c=750000000'
        },
        {
          id: 6,
          name: 'Коммутатор Mercusys MS105G',
          description: 'Расширьте проводную сеть благодаря 5 портам Ethernet 10/100/1000 Мбит/с!',
          price: 7248,
          rating: 5.0,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h79/h86/64015866003486.jpg?format=gallery-medium',
          images: [
            'https://resources.cdn-kaspi.kz/img/m/p/h79/h86/64015866003486.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/hd9/h30/64015872557086.jpg?format=gallery-medium',
          ],
          link: 'https://kaspi.kz/shop/p/kommutator-mercusys-ms105g-100571902/?c=750000000'
        },
        {
          id: 7,
          name: 'Видеокарта Palit GeForce RTX 5070 Infinity 3  12 Гб',
          description: 'Новая эра мощности малого форм-фактора: сборки серии Infinity 3 малого форм-фактора набирают популярность не без оснований.',
          price: 413000,
          rating: 5.0,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/pb0/peb/58359329.png?format=gallery-medium',
          images: [
            'https://resources.cdn-kaspi.kz/img/m/p/pd3/pe8/58359334.png?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p7f/pe8/58359337.png?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p46/pe8/58359339.png?format=gallery-medium'
          ],
          link: 'https://kaspi.kz/shop/p/palit-geforce-rtx-5070-infinity-3-ne75070019k9-gb2050s-12-gb-144023378/?c=750000000'
        },
        {
          id: 8,
          name: 'Графический планшет XP-PEN Star 03 V2 черный',
          description: 'Графический планшет Xp-pen Star 03 V2 Расширь свои творческие возможности с помощью графического планшета Star 03',
          price: 30380,
          rating: 5.0,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h9d/had/63841884799006.jpg?format=gallery-medium',
          images: [
            'https://resources.cdn-kaspi.kz/img/m/p/hd7/h98/84097717993502.png?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h1f/h07/84097717862430.png?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/hd6/hb5/84097718124574.png?format=gallery-medium'
          ],
          link: 'https://kaspi.kz/shop/p/xp-pen-star-03-v2-chernyi-18500063/?c=750000000'
        },
        {
          id: 9,
          name: 'МФУ Epson EcoTank L3250',
          description: 'МФУ Epson EcoTank L3250 — это струйное устройство «3-в-1» (принтер, сканер, копир) с поддержкой Wi-Fi, предназначенное для дома и небольшого офиса.',
          price: 106506,
          rating: 5.0,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/ha6/hf3/66594300821534.jpg?format=gallery-medium',
          images: [
            'https://resources.cdn-kaspi.kz/img/m/p/h69/h7d/66594301870110.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p1a/p9c/67212712.png?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h5d/h67/66594499002398.jpg?format=gallery-medium'
          ],
          link: 'https://kaspi.kz/shop/p/mfu-epson-ecotank-l3250-107929066/?c=750000000'
        },
        {
          id: 10,
          name: 'Веб-камера Ugreen CM678 15728',
          description: 'Веб камера UGREEN CM678 для ПК и ноутбука 1080P 30FPS 2 микрофона HD Webcam (15728).',
          price: 13986,
          rating: 5.0,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h2a/hcd/84572172156958.jpg?format=gallery-medium',
          images: [
            'https://resources.cdn-kaspi.kz/img/m/p/p9b/pe4/59408207.png?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p55/p70/59407760.png?format=gallery-medium',
          ],
          link: 'https://kaspi.kz/shop/p/ugreen-cm678-15728-114844110/?c=750000000'
        },
      ];
}
