from django.urls import path
from .views import InstrumentCatalogList,InstrumentCatalogDetailList, SlidersList, InstrumentCatalogDetailIntermediaryList
urlpatterns = [
# path('<int:pk>/', DetailTodo.as_view()),
path('GetCatalog', InstrumentCatalogList.as_view()),
path('GetInstrumentDetail', InstrumentCatalogDetailList.as_view()),
path('GetSliders', SlidersList.as_view()),
path('test', InstrumentCatalogDetailIntermediaryList.as_view())
]
