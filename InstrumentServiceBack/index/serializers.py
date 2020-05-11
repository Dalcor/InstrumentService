from rest_framework import serializers
from .models import InstrumentCatalog, InstrumentCatalogDetail, Sliders, InstrumentCatalogDetailIntermediary


class InstrumentCatalogSerializer(serializers.ModelSerializer):
    class Meta:
        model = InstrumentCatalog
        fields = ('id', 'name', 'media_path',)


class InstrumentCatalogDetailSerializer(serializers.ModelSerializer):
    instruments_id = serializers.SerializerMethodField()
    class Meta:
        model = InstrumentCatalogDetail
        fields = ('id', 'name', 'media_path', 'instruments_id', )

    def get_instruments_id(self, obj):
        instruments_id_array = []
        queryset = InstrumentCatalogDetailIntermediary.objects.filter(detail = obj.id)
        for query in queryset:
            instruments_id_array.append(query.instrument_id)
        
        return instruments_id_array



class SlidersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sliders
        fields = ('media_path',)


class InstrumentCatalogDetailIntermediarySerializer(serializers.ModelSerializer):
    class Meta:
        model = InstrumentCatalogDetailIntermediary
        fields = ('instrument_id', 'detail_id')
