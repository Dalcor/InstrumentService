from django.contrib import admin

# Register your models here.
from .models import InstrumentCatalog, InstrumentCatalogDetail, Sliders, InstrumentCatalogDetailIntermediary

admin.site.register(InstrumentCatalog)
admin.site.register(InstrumentCatalogDetail)
admin.site.register(Sliders)
admin.site.register(InstrumentCatalogDetailIntermediary)
