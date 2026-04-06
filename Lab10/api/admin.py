from django.contrib import admin
from .models import Category, Product

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id' , 'name')
    search_fields = ('name',)

@admin.register(Product)
class ProductAdmon(admin.ModelAdmin):
    list_display = ('id' , 'name' , 'price' , 'description' , 'category')
    search_fields = ('name',)
