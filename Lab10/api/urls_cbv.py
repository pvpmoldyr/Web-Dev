from django.urls import path
from api.views.cbv import (
    ProductListAPIView, ProductDetailAPIView,
)

urlpatterns = [
    path('products/', ProductListAPIView.as_view()),
    path('products/<int:product_id>/', ProductDetailAPIView.as_view()),
]