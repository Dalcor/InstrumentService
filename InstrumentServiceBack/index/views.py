from django.shortcuts import render
from rest_framework import generics
from .models import InstrumentCatalog, InstrumentCatalogDetail, Sliders
from .serializers import InstrumentCatalogSerializer, InstrumentCatalogDetailSerializer, SlidersSerializer, InstrumentCatalogDetailIntermediary, InstrumentCatalogDetailIntermediarySerializer


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
