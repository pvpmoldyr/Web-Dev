import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'shop_back.settings')
django.setup()

from api.models import Category, Product

def fill():
    Product.objects.all().delete()
    Category.objects.all().delete()

    c1 = Category.objects.create(name='Laptops')
    c2 = Category.objects.create(name='Components')
    c3 = Category.objects.create(name='Accessories')
    c4 = Category.objects.create(name='Networking')

    
    # Category 1: Laptops
    Product.objects.create(name='Castom E157D 15.6"', price=249900, category=c1, count=10, is_active=True,
                           description='AMD Ryzen 5, 16GB RAM, 1000GB SSD, Win 11')
    Product.objects.create(name='Lenovo LOQ 15.6"', price=469998, category=c1, count=5, is_active=True,
                           description='Intel Core i5-12450HX, RTX 3050 6GB, 144Hz')
    Product.objects.create(name='HYDRA Home Razor R5', price=230000, category=c1, count=8, is_active=True,
                           description='Powerful laptop for work and study, Ryzen 5')
    Product.objects.create(name='Apple MacBook Air 13 2025', price=521993, category=c1, count=3, is_active=True,
                           description='M3 Chip, 16GB RAM, 256GB SSD, macOS')
    Product.objects.create(name='ARTEO Titan Game R7', price=359790, category=c1, count=7, is_active=True,
                           description='High performance gaming laptop, Win 11')

    # Category 2: Components
    Product.objects.create(name='SSD Kingston A400 480GB', price=42641, category=c2, count=50, is_active=True,
                           description='SATA 2.5 SSD for OS and programs')
    Product.objects.create(name='Palit RTX 5070 Infinity 3', price=413000, category=c2, count=2, is_active=True,
                           description='Next-gen GPU, 12GB VRAM, SFF compatible')
    Product.objects.create(name='Case XTREON N275 Black', price=17990, category=c2, count=12, is_active=True,
                           description='Stylish PC case with great airflow')
    Product.objects.create(name='PC LINEUP i5-14400 / RTX 5060', price=679000, category=c2, count=4, is_active=True,
                           description='Full PC Set: 32GB RAM, 1TB SSD, Win 11 Pro')
    Product.objects.create(name='Fan PCcooler FX-120-3', price=1950, category=c2, count=100, is_active=True,
                           description='Silent 18dB RGB cooling fan')

    # Category 3: Accessories
    Product.objects.create(name='XP-PEN Star 03 V2', price=30380, category=c3, count=15, is_active=True,
                           description='Graphics tablet for digital artists')
    Product.objects.create(name='Webcam Ugreen CM678', price=13986, category=c3, count=20, is_active=True,
                           description='1080P 30FPS HD Webcam with dual mic')
    Product.objects.create(name='Mouse Ultra-S M100', price=9500, category=c3, count=30, is_active=True,
                           description='Ultra-light ergonomic gaming mouse')
    Product.objects.create(name='Voltage Regulator Resanta', price=169490, category=c3, count=5, is_active=True,
                           description='13.5 kW power stabilizer for PC protection')
    Product.objects.create(name='Monitor Mount NB F80', price=8990, category=c3, count=25, is_active=True,
                           description='Gas spring desktop monitor arm, White')

    # Category 4: Networking
    Product.objects.create(name='Switch Mercusys MS105G', price=7248, category=c4, count=40, is_active=True,
                           description='5-Port Gigabit Desktop Switch')
    Product.objects.create(name='Wi-Fi Router FaizFull fw20', price=17900, category=c4, count=10, is_active=True,
                           description='Portable router with Powerbank function')
    Product.objects.create(name='TP-LINK Archer C64', price=17978, category=c4, count=15, is_active=True,
                           description='AC1200 Dual Band MU-MIMO Router')
    Product.objects.create(name='Bluetooth Adapter BAVIN', price=4459, category=c4, count=50, is_active=True,
                           description='USB Bluetooth 5.3 receiver')
    Product.objects.create(name='Starlink v5 mini Kit', price=199914, category=c4, count=2, is_active=True,
                           description='Satellite internet kit, ultra-portable')

    print("Success")

if __name__ == '__main__':
    fill()