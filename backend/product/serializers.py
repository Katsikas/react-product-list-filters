from rest_framework import serializers
from .models import Product, Category


class ProductSerializer(serializers.ModelSerializer):

    class Meta:
        model = Product
        fields = '__all__'
        extra_kwargs = {'category': {'read_only': True}}