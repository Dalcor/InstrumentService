from django.db import models

# Create your models here.
class InstrumentCatalog(models.Model):
    name = models.CharField(max_length = 50)
    media_path = models.ImageField(max_length = 200)

    def __str__(self):
        return self.name


class InstrumentCatalogDetail(models.Model):
    name = models.CharField(max_length = 50)
    media_path = models.CharField(max_length = 200)

    def __str__(self):
        return self.name



class InstrumentCatalogDetailIntermediary(models.Model):
    instrument = models.ForeignKey(
        'InstrumentCatalog',
        on_delete=models.CASCADE,
    )
    detail = models.ForeignKey(
        'InstrumentCatalogDetail',
        on_delete=models.CASCADE,
    )

    def __str__(self):
        return self.instrument.name + '--' + self.detail.name

class Sliders(models.Model):
    name = models.CharField(max_length = 50)
    media_path = models.ImageField(max_length = 200)

    def __str__(self):
        return self.name



class Tools(models.Model):
    name = models.CharField(max_length = 100)
    vendor_code = models.CharField(max_length = 15)
    price = models.CharField(max_length = 10)
    wholesale_var = models.CharField(max_length = 3)
    media_path = models.CharField(max_length = 200)
    amount = models.CharField(max_length = 5)
