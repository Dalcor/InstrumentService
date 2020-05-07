from django.db import models

# Create your models here.
class InstrumentCatalog(models.Model):
    name = models.CharField(max_length = 50)
    media_path = models.CharField(max_length = 200)

    def __str__(self):
        return self.name


class InstrumentCatalogDetail(models.Model):
    name = models.CharField(max_length = 50)
    media_path = models.CharField(max_length = 200)
    instrument = models.ForeignKey(
        'InstrumentCatalog',
        on_delete=models.CASCADE,
    )

    
    def __str__(self):
        return self.name




class Sliders(models.Model):
    name = models.CharField(max_length = 50)
    media_path = models.CharField(max_length = 200)

    def __str__(self):
        return self.name
