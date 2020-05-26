from django.urls import path, re_path
# from .views import InstrumentCatalogList,InstrumentCatalogDetailList, SlidersList, InstrumentCatalogDetailIntermediaryList
from .views import *
urlpatterns = [
# path('<int:pk>/', DetailTodo.as_view()),
path('GetCatalog', InstrumentCatalogList.as_view()),
path('GetInstrumentDetail', InstrumentCatalogDetailList.as_view()),
path('GetSliders', SlidersList.as_view()),
re_path('(?P<instrument>.+)/(?P<detail>.+)/(?P<vendor>.+)', ConcreteTool.as_view()),
re_path('(?P<instrument>.+)/(?P<detail>.+)', ToolsList.as_view()),
path('GetCartItems', CartItemsList.as_view()),
path('GetFilterTags', FilterTagList.as_view()),
]
