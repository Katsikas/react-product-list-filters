from rest_framework import serializers
from .models import Product, Category, Tag


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = '__all__'



class ProductSerializer(serializers.ModelSerializer):
    categories = CategorySerializer(many=True, read_only=True, source='category')
    all_tags = TagSerializer(many=True, read_only=True, source='tags')
    
    class Meta:
        model = Product
        exclude=('category','tags',)
      

