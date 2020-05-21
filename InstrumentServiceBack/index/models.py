from django.db import models
import re

# Create your models here.
class InstrumentCatalog(models.Model):
    name = models.CharField(max_length = 50)
    name_link = models.CharField(max_length = 50, blank = True)
    media_path = models.FileField(upload_to = 'CatalogImg/', max_length = 200)

    def __str__(self):
        return self.name


    def save(self, *args, **kwargs):
        self.name_link = re.sub(r"\s+", '-', self.name)
        super().save(*args, **kwargs)

class InstrumentCatalogDetail(models.Model):
    name = models.CharField(max_length = 50)
    name_link =  models.CharField(max_length = 50, blank = True)
    media_path = models.FileField(upload_to = 'CatalogImg/' ,max_length = 200)

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        self.name_link = re.sub(r"\s+", '-', self.name  )
        super().save(*args, **kwargs)


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
    media_path = models.ImageField(upload_to = 'SlidersImg/' ,max_length = 200)

    def __str__(self):
        return self.name



class Tools(models.Model):
    name = models.CharField(max_length = 100)
    vendor_code = models.CharField(max_length = 15)
    price = models.CharField(max_length = 10)
    wholesale_var = models.CharField(max_length = 3)
    media_path = models.ImageField(upload_to = 'ToolImg/' ,max_length = 200)
    amount = models.CharField(max_length = 5)
    instrument = models.ForeignKey( 'InstrumentCatalog', on_delete=models.SET_NULL, null=True)
    detail = models.ForeignKey( 'InstrumentCatalogDetail', null=True, on_delete=models.SET_NULL)
    description = models.CharField(max_length = 100)
    company = models.ForeignKey('Companys', null=True, on_delete=models.SET_NULL )

    def __str__(self):
        return self.name

class Companys(models.Model):
    name = models.CharField(max_length = 100)
    media_path = models.ImageField(max_length = 200)

    def __str__(self):
        return self.name


class Lineup(models.Model):
    name = models.CharField(max_length = 100)
    company = models.ForeignKey('Companys', null=True, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

class ToolsLineup(models.Model):
    tool = models.ForeignKey('Tools', on_delete = models.CASCADE)
    lineup = models.ForeignKey('Lineup', on_delete = models.CASCADE)

    def __str__(self):
        return str(self.tool) + ' -- ' + str(self.lineup)
