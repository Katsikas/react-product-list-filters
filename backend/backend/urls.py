from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from product.views import ProductView

router = routers.DefaultRouter()
router.register(r'products', ProductView, basename='product')


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]
