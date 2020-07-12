from rest_framework import serializers
# from .models import InstrumentCatalog, InstrumentCatalogDetail, Sliders, InstrumentCatalogDetailIntermediary, Tools
from .models import *


class InstrumentCatalogSerializer(serializers.ModelSerializer):
    #   media_path = serializers.HyperlinkedModelSerializer()
    class Meta:
        model = InstrumentCatalog
        fields = ('id', 'name', 'media_path', 'name_link')


class InstrumentCatalogDetailSerializer(serializers.ModelSerializer):
    instruments_id = serializers.SerializerMethodField()

    class Meta:
        model = InstrumentCatalogDetail
        fields = ('id', 'name', 'media_path', 'instruments_id', 'name_link')

    def get_instruments_id(self, obj):
        instruments_id_array = []
        queryset = InstrumentCatalogDetailIntermediary.objects.filter(detail = obj.id)
        for query in queryset:
            instruments_id_array.append(query.instrument_id)
        return instruments_id_array

    #   def get_media_path()

class SlidersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sliders
        fields = ('media_path',)


class InstrumentCatalogDetailIntermediarySerializer(serializers.ModelSerializer):
    class Meta:
        model = InstrumentCatalogDetailIntermediary
        fields = ('instrument_id', 'detail_id')


class ToolsSerializer(serializers.ModelSerializer):
    # lineup = serializers.SerializerMethodField()

    # def get_lineup(self, obj):
    #
    #     queryset = ToolsLineup.objects.filter(tool = obj.id)
    #     return {key: value.company for queryset, value.lineup in queryset if key == value.company}

    class Meta:
        model = Tools
        fields = ('id','name','vendor_code', 'price', 'wholesale_var', 'media_path',
            'amount', 'instrument', 'detail', 'description', 'company')
# def get_lineup_name(self, obj):
#     lineup_array = []
#     queryset = ToolsLineup.objects.filter(tool = obj.id)


class ToolsPriceSerializer(serializers.Serializer):
    min_price = serializers.DecimalField(max_digits=10, decimal_places=2)
    max_price = serializers.DecimalField(max_digits=10, decimal_places=2)





class CompanySerializer(serializers.ModelSerializer):
    checked = serializers.SerializerMethodField()
    class Meta:
        model = Companys
        fields = ('id', 'name', 'checked')


    def get_checked(self, obj):
        return False
