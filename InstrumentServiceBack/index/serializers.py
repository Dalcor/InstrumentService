from rest_framework import serializers
from .models import InstrumentCatalog, InstrumentCatalogDetail, Sliders


class InstrumentCatalogSerializer(serializers.ModelSerializer):
    class Meta:
        model = InstrumentCatalog
        fields = ('id', 'name', 'media_path',)


class InstrumentCatalogDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = InstrumentCatalogDetail
        fields = ('id', 'name', 'media_path','instrument')


class SlidersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sliders
        fields = ('media_path',)
