from django.shortcuts import render
from rest_framework import generics
from .models import InstrumentCatalog, InstrumentCatalogDetail, Sliders, Tools
from .serializers import *


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


class ToolsList(generics.ListAPIView):
    serializer_class = ToolsSerializer

    def get_queryset(self):
        instrument = InstrumentCatalog.objects.get(name = self.kwargs['instrument'])
        detail = InstrumentCatalogDetail.objects.get(name = self.kwargs['detail'])
        queryset = Tools.objects.filter(instrument = instrument, detail = detail)
        return queryset
