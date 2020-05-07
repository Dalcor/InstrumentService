from django.urls import path
from .views import InstrumentCatalogList,InstrumentCatalogDetailList, SlidersList
urlpatterns = [
# path('<int:pk>/', DetailTodo.as_view()),
path('GetCatalog', InstrumentCatalogList.as_view()),
path('GetInstrumentDetail', InstrumentCatalogDetailList.as_view()),
path('GetSliders', SlidersList.as_view()),
]
