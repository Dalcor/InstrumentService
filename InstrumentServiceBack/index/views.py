from django.shortcuts import render, HttpResponse
from rest_framework import generics
from .models import InstrumentCatalog, InstrumentCatalogDetail, Sliders, Tools
from .serializers import *
from rest_framework.response import Response
from drf_multiple_model.views import ObjectMultipleModelAPIView
from django.http import Http404
from rest_framework import status
from rest_framework.response import Response

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

#

class ToolsList(ObjectMultipleModelAPIView):

    def get_querylist(self):
        filterTagArr = []
        try:
            instrument = InstrumentCatalog.objects.get(name_link = self.kwargs['instrument'])
            detail = InstrumentCatalogDetail.objects.get(name_link = self.kwargs['detail'])
        except:
            raise Http404()
        toolsQueryset = Tools.objects.filter(instrument = instrument, detail = detail)
        for query in toolsQueryset:
            filterTagArr.append(query.company)


        querylist = (
            {'queryset': toolsQueryset, 'serializer_class': ToolsSerializer},
            {'queryset': InstrumentCatalog.objects.filter(name = instrument), 'serializer_class': InstrumentCatalogSerializer},
            {'queryset': InstrumentCatalogDetail.objects.filter(name = detail), 'serializer_class': InstrumentCatalogDetailSerializer},
            {'queryset': Companys.objects.filter(name__in = filterTagArr ), 'serializer_class': CompanySerializer},
            )

        return querylist



class ConcreteTool(generics.ListAPIView):
    serializer_class = ToolsSerializer


    def get_queryset(self):
        try:
            queryset = Tools.objects.filter(vendor_code = self.kwargs['vendor'])
        except:
            raise Http404()
        return queryset


class CartItemsList(generics.ListAPIView):
    serializer_class = ToolsSerializer

    def get_queryset(self):
        vendor_code = self.request.data
        # vendor_code.remove('csrftoken')
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
