from django.shortcuts import render, HttpResponse
from rest_framework import generics
from .models import InstrumentCatalog, InstrumentCatalogDetail, Sliders, Tools
from .serializers import *
from rest_framework.response import Response
from drf_multiple_model.views import ObjectMultipleModelAPIView


class InstrumentCatalogList(generics.ListAPIView):
    queryset = InstrumentCatalog.objects.all()
    serializer_class = InstrumentCatalogSerializer


class InstrumentCatalogDetailList(generics.ListAPIView):
    queryset = InstrumentCatalogDetail.objects.all()
    serializer_class = InstrumentCatalogDetailSerializer


class InstrumentCatalogDetailIntermediaryList(generics.ListAPIView):
    queryset = InstrumentCatalogDetailIntermediary.objects.all()
    serializer_class = InstrumentCatalogDetailIntermediarySerializer


class SlidersList(generics.ListAPIView):
    queryset = Sliders.objects.all()
    serializer_class = SlidersSerializer

def tools_filter(queryset, request, *args, **kwargs):
    instrument = InstrumentCatalog.objects.get(name = kwargs['instrument'])
    detail = InstrumentCatalogDetail.objects.get(name = kwargs['detail'])
    queryset = queryset.filter(instrument = instrument, detail = detail)

    return queryset

def catalog_filter(queryset, request, *args, **kwargs):
    queryset = queryset.filter(name = kwargs['instrument'])

    return queryset

def detail_filter(queryset, request, *args, **kwargs):
    queryset = queryset.filter(name = kwargs['detail'])
    return queryset


class ToolsList(ObjectMultipleModelAPIView):
    # serializer_class = ToolsSerializer
    querylist = [
        {'queryset': Tools.objects.all(), 'serializer_class': ToolsSerializer, 'filter_fn': tools_filter},
        {'queryset': InstrumentCatalog.objects.all(), 'serializer_class': InstrumentCatalogSerializer,  'filter_fn': catalog_filter },
        {'queryset': InstrumentCatalogDetail.objects.all(), 'serializer_class': InstrumentCatalogDetailSerializer,  'filter_fn': detail_filter },
    ]


    # def get(self, request, instrument, detail):
    #     serializer = ToolsSerializer(many=True)
    #     new_serializer_data = list(self.get_queryset())
    #     new_serializer_data.append({'dict_key': 'dict_value'})
    #
    #     return HttpResponse(serializer.serialize(new_serializer_data), mimetype='application/json')


class ConcreteTool(generics.ListAPIView):
    serializer_class = ToolsSerializer


    def get_queryset(self):
        queryset = Tools.objects.get(vendor_code = self.kwargs['vendor'])
        return queryset


class CartItemsList(generics.ListAPIView):
    serializer_class = ToolsSerializer

    def get_queryset(self):
        vendor_code = self.request.data
        vendor_code.remove('csrftoken')
        # vendor = InstrumentCatalog.objects.all()
        # queryset = Tools.objects.filter(vendor_code__in = vendor)
        queryset = Tools.objects.filter(vendor_code__in = vendor_code)
        return queryset

    def post(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)
#
# class ConcreteTool(generics.ListAPIView):
#     serializers = ToolsSerializer



class FilterTagList(generics.ListAPIView):
    serializer_class = CompanySerializer
    queryset = Companys.objects.all()
