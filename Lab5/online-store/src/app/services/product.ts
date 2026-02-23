import { Injectable } from '@angular/core';
import { Product } from '../models/product-model';
import { Category } from '../models/category.model';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
  private categories: Category[] = [
    { id: 1, name: 'Ноутбуки' },
    { id: 2, name: 'Комплектующие' },
    { id: 3, name: 'Периферия' },
    { id: 4, name: 'Сетевое оборудование' }
];
private products: Product[] = [
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
        link: 'https://kaspi.kz/shop/p/castom-e157d-15-6-16-gb-ssd-1000-gb-win-11-101725124-145214483/?c=750000000',
        likes: 255,
        categoryId: 1
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
          link: 'https://kaspi.kz/shop/p/lenovo-loq-15-6-16-gb-ssd-512-gb-bez-os-15iax9-83gs005nrk-120581412/?c=750000000',
          likes: 114,
          categoryId: 1
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
          link: 'https://kaspi.kz/shop/p/hydra-home-razor-r5-15-6-16-gb-ssd-512-gb-win-11-h31-138766585/?c=750000000',
          likes: 200,
          categoryId: 1
        },
        {
          id: 4,
          name: 'Ноутбук Apple MacBook Air 13 2025 / 16 Гб / SSD 256 Гб / macOS / MW123',
          description: 'Представляем Apple MacBook Air 13 2025 — ультрабук, который сочетает в себе высокую производительность, изящный дизайн и долговечность. Этот ноутбук станет идеальным спутником для работы и развлечений.',
          price: 521993,
          rating: 4.9,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/pab/pc3/35723922.jpg?format=gallery-medium',
          images: [
            'https://resources.cdn-kaspi.kz/img/m/p/p72/pc3/35723924.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p3a/pc3/35723926.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p79/pc0/35723930.jpg?format=gallery-medium'
          ],
          link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2025-16-gb-ssd-256-gb-macos-mw123-137582956/?c=750000000',
          likes: 122,
          categoryId: 1
        },
        {
          id: 5,
          name: 'Ноутбук ARTEO Titan Game R7 15.6" / 16 Гб / SSD 512 Гб',
          description: 'Характеристики Ноутбук ARTEO Titan Game R7 15.6" / 16 Гб / SSD 512 Гб / Win 11 / 794561235',
          price: 359790,
          rating: 4.6,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/p45/p96/89155369.png?format=gallery-medium',
          images: [
            'https://resources.cdn-kaspi.kz/img/m/p/pd9/p93/89155370.png?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p84/p93/89155373.png?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p14/p93/89155377.png?format=gallery-medium'
          ],
          link: 'https://kaspi.kz/shop/p/arteo-titan-game-r7-15-6-16-gb-ssd-512-gb-win-11-794561235-149101653/?c=750000000',
          likes: 61,
          categoryId: 1
        },
        {
          id: 6,
          name: 'SSD Kingston SA400S37/480G 480 Гб',
          description: 'SSD-накопитель Kingston A400 имеет достаточно большую емкость (480 ГБ). Такого объема достаточно не только для установки операционной системы, но и для множества программ, а, возможно, и нескольких игр.',
          price: 42641,
          rating: 5.0,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h50/hc5/87325424582686.jpg?format=gallery-medium',
          images: [
            'https://resources.cdn-kaspi.kz/img/m/p/ha8/hb3/87325424844830.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h63/h12/87325424779294.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h80/h22/87325424910366.jpg?format=gallery-medium'
          ],
          link: 'https://kaspi.kz/shop/p/ssd-kingston-sa400s37-480g-480-gb-6800659/?c=750000000',
          likes: 1128,
          categoryId: 2
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
          link: 'https://kaspi.kz/shop/p/palit-geforce-rtx-5070-infinity-3-ne75070019k9-gb2050s-12-gb-144023378/?c=750000000',
          likes: 47,
          categoryId: 2
        },
        {
          id: 8,
          name: 'Корпус XTREON N275 черный',
          description: 'Корпус XTREON N275 — стильное и функциональное решение для сборки вашего ПК, обеспечивающее максимальную производительность и компактность.',
          price: 17990 ,
          rating: 5.0,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/p70/p2b/31152544.jpg?format=gallery-medium',
          images: [
            'https://resources.cdn-kaspi.kz/img/m/p/pa8/p2b/31152546.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/pc4/p2b/31152547.png?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/pe1/p2b/31152548.png?format=gallery-medium'
          ],
          link: 'https://kaspi.kz/shop/p/xtreon-n275-chernyi-136586661/?c=750000000',
          likes: 40,
          categoryId: 2
        },
        {
          id: 9,
          name: 'LINEUP i5-14400 / RTX 5060 8 Гб / 32 Гб / SSD 1000 Гб / Win 11 Pro',
          description: 'Полный комплект ПК — всё, что нужно для игр и работы!⚡ Мощный Intel Core i5‑14400 🎮 RTX 5060 — плавная графика в новых играх 💾 32 ГБ RAM + SSD 1 ТБ — быстрый запуск игр и программ',
          price: 679000,
          rating: 4.79,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/p68/p43/45177693.jpg?format=gallery-medium',
          images: [
            'https://resources.cdn-kaspi.kz/img/m/p/pc3/p27/98411368.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p1a/p27/98411362.png?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p53/p27/98411364.png?format=gallery-medium'
          ],
          link: 'https://kaspi.kz/shop/p/lineup-5060140222-chernyi-140465557/?c=750000000',
          likes: 87,
          categoryId: 2
        },
        {
          id: 10,
          name: 'Вентилятор для корпуса PCcooler FX-120-3 FRGB',
          description: 'Представляем вентилятор PCcooler FX-120-3 FRGB — идеальный выбор для создания комфортного климата в вашем игровом ПК. С уровнем шума всего 18 дБ вы сможете наслаждаться тишиной во время игр и работы.',
          price: 1950,
          rating: 4.96,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/pd4/p65/37700372.jpg?format=gallery-medium',
          images: [
            'https://resources.cdn-kaspi.kz/img/m/p/pf0/p65/37700373.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p29/p66/37700375.jpg?format=gallery-medium'
          ],
          link: 'https://kaspi.kz/shop/p/pccooler-fx-120-3-frgb-101072963/?c=750000000',
          likes: 83,
          categoryId: 2
        },
        {
          id: 11,
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
          link: 'https://kaspi.kz/shop/p/xp-pen-star-03-v2-chernyi-18500063/?c=750000000',
          likes: 106,
          categoryId: 3
        },
        {
          id: 12,
          name: 'Веб-камера Ugreen CM678 15728',
          description: 'Веб камера UGREEN CM678 для ПК и ноутбука 1080P 30FPS 2 микрофона HD Webcam (15728).',
          price: 13986,
          rating: 5.0,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h2a/hcd/84572172156958.jpg?format=gallery-medium',
          images: [
            'https://resources.cdn-kaspi.kz/img/m/p/p9b/pe4/59408207.png?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p55/p70/59407760.png?format=gallery-medium',
          ],
          link: 'https://kaspi.kz/shop/p/ugreen-cm678-15728-114844110/?c=750000000',
          likes: 50,
          categoryId: 3
        },
        {
          id: 13,
          name: 'Мышь Ultra-S ULTMICE10-4-M100 черный',
          description: ' Представляем ультралёгкую и эргономичную игровую мышь от Ultra-S — ваш надёжный инструмент для работы и побед!',
          price: 9500,
          rating: 4.88,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/pf4/p6f/89174217.jpg?format=gallery-medium',
          images: [
            'https://resources.cdn-kaspi.kz/img/m/p/p98/p72/89174220.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/pd1/p72/89174222.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p96/p73/89174229.jpg?format=gallery-medium',
          ],
          link: 'https://kaspi.kz/shop/p/ultra-s-ultmice10-4-m100-chernyi-152945621/?c=750000000',
          likes: 9,
          categoryId: 3
        },
        {
          id: 14,
          name: 'Стабилизатор напряжения Ресанта СПН-13500',
          description: 'Стабилизатор пониженного напряжения РЕСАНТА СПН-13500 предназначен для выравнивания входного напряжения и защиты приборов от перепадов напряжения с суммарной мощностью до 13,5 кВт',
          price: 169490,
          rating: 4.9,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h21/h04/63774514282526.jpg?format=gallery-medium',
          images: [
            'https://resources.cdn-kaspi.kz/img/m/p/h46/ha2/63774523457566.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/hc3/h35/63774528241694.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h18/hfc/63774526079006.jpg?format=gallery-medium',
          ],
          link: 'https://kaspi.kz/shop/p/stabilizator-naprjazhenija-resanta-spn-13500-5400799/?c=750000000',
          likes: 244,
          categoryId: 3
        },
        {
          id: 15,
          name: 'Крепление для монитора North Bayou F80 белый',
          description: 'Настольный кронштейн NB F80 с газлифтом для монитора в том числе для крепления телевизора на струбцине к столешнице, наклонно-поворотный.',
          price: 8990,
          rating: 4.9,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h07/hb2/85504639467550.jpg?format=gallery-medium',
          images: [
            'https://resources.cdn-kaspi.kz/img/m/p/h4f/h20/85504639598622.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h78/hf6/85504639664158.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/hf6/h7c/85504639729694.png?format=gallery-medium',
          ],
          link: 'https://kaspi.kz/shop/p/north-bayou-f80-belyi-117683311/?c=750000000',
          likes: 124,
          categoryId: 3
        },
        {
          id: 16,
          name: 'Коммутатор Mercusys MS105G',
          description: 'Расширьте проводную сеть благодаря 5 портам Ethernet 10/100/1000 Мбит/с!',
          price: 7248,
          rating: 5.0,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h79/h86/64015866003486.jpg?format=gallery-medium',
          images: [
            'https://resources.cdn-kaspi.kz/img/m/p/h79/h86/64015866003486.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/hd9/h30/64015872557086.jpg?format=gallery-medium',
          ],
          link: 'https://kaspi.kz/shop/p/kommutator-mercusys-ms105g-100571902/?c=750000000',
          likes: 84,
          categoryId: 4
        },
        {
          id: 17,
          name: 'Wi-Fi роутер FaizFull fw20',
          description: 'Новый уровень скорости и удобства! Совмещает функции мощного Wi-Fi роутера и внешнего аккумулятора.',
          price: 17900,
          rating: 5.0,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/pa6/pc2/88869509.png?format=gallery-medium',
          images: [
            'https://resources.cdn-kaspi.kz/img/m/p/p83/pc5/88869514.png?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/pbb/pc5/88869516.png?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/pb4/pc8/88869522.png?format=gallery-medium'
          ],
          link: 'https://kaspi.kz/shop/p/wi-fi-router-faizfull-fw20-152854958/?c=750000000',
          likes: 39,
          categoryId: 4
        },
        {
          id: 18,
          name: 'Wi-Fi роутер TP-LINK Archer C64',
          description: 'Двухдиапазонный Archer C64 позволяет подключить больше устройств: ',
          price: 17978,
          rating: 5.0,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/hfd/hab/64169205792798.jpg?format=gallery-medium',
          images: [
            'https://resources.cdn-kaspi.kz/img/m/p/h71/h16/64169277358110.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h2c/h3a/64169280667678.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h22/h34/64169274441758.jpg?format=gallery-medium'
          ],
          link: 'https://kaspi.kz/shop/p/wi-fi-router-tp-link-archer-c64-102399103/?c=750000000',
          likes: 694,
          categoryId: 4
        },
        {
          id: 19,
          name: 'Bluetooth адаптер BAVIN 10500 черный',
          description: 'Bavin OTG-10 компактный Bluetooth 5. 3 ресивер для автомобиля и колонок.  ',
          price: 4459,
          rating: 5.0,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/p36/p67/62840019.jpeg?format=gallery-medium',
          images: [
            'https://resources.cdn-kaspi.kz/img/m/p/pb7/p18/62840021.jpeg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p4e/p15/62840022.jpeg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/pe4/p11/62840023.jpeg?format=gallery-medium'
          ],
          link: 'https://kaspi.kz/shop/p/bavin-10500-chernyi-144687941/?c=750000000',
          likes: 28,
          categoryId: 4
        },
        {
          id: 20,
          name: 'Спутниковый интернет Комплект спутникового интернета Starlink v5 mini Kit',
          description: 'Starlink Mini V5 Kit – это компактный комплект спутникового интернета, который легко помещается в рюкзак и даёт быстрый интернет там, где нет сотовой связи.',
          price: 199914,
          rating: 4.99,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/pc7/pe7/60551725.jpeg?format=gallery-medium',
          images: [
            'https://resources.cdn-kaspi.kz/img/m/p/pc7/pe7/60551725.jpeg?format=gallery-medium',
          ],
          link: 'https://kaspi.kz/shop/p/komplekt-sputnikovogo-interneta-starlink-v5-mini-kit-144629422/?c=750000000',
          likes: 17,
          categoryId: 4
        },

      ];
    getCategories(): Category[] {
        return this.categories;
    }

    getProductsByCategory(categoryId: number): Product[] {
        return this.products.filter(p => p.categoryId === categoryId);
    }

    deleteProduct(productId: number): void {
        const index = this.products.findIndex(p => p.id === productId);
        if (index !== -1) {
            this.products.splice(index, 1);
        }
    }

    likeProduct(productId: number): void {
        const product = this.products.find(p => p.id === productId);
        if (product) {
            product.likes++;
        }
    }
}