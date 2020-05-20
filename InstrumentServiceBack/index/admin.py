from django.contrib import admin

# Register your models here.
from .models import *

admin.site.register(InstrumentCatalog)
admin.site.register(InstrumentCatalogDetail)
admin.site.register(Sliders)
admin.site.register(InstrumentCatalogDetailIntermediary)
admin.site.register(Tools)
admin.site.register(Companys)
admin.site.register(Lineup)
admin.site.register(ToolsLineup)
