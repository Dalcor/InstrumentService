from django.test import TestCase
from .models import InstrumentCatalog, InstrumentCatalogDetail, Sliders

# Create your tests here.
class InstrumentCatalogTest(TestCase):


    @classmethod
    def setUpTestData(cls):
            InstrumentCatalog.objects.create(name='name here', media_path='/rout here/')


    def test_title_content(self):
        instrumentCatalog = InstrumentCatalog.objects.get(id=1)
        expected_object_name = f'{instrumentCatalog.name}'
        self.assertEquals(expected_object_name, 'name here')


    def test_body_content(self):
        instrumentCatalog = InstrumentCatalog.objects.get(id=1)
        expected_object_name = f'{instrumentCatalog.media_path}'
        self.assertEquals(expected_object_name, '/rout here/')


class InstrumentCatalogDetailTest(TestCase):
        @classmethod
        def setUpTestData(cls):
                Catalog = InstrumentCatalog.objects.create(name='name here', media_path='/rout here/')
                InstrumentCatalogDetail.objects.create(name='name detail  here', media_path='/rout detail here/', instrument = Catalog)


        def test_title_content(self):
            instrumentCatalogDetail = InstrumentCatalogDetail.objects.get(id=1)
            expected_object_name = f'{instrumentCatalogDetail.name}'
            self.assertEquals(expected_object_name, 'name detail  here')


        def test_body_content(self):
            instrumentCatalogDetail = InstrumentCatalogDetail.objects.get(id=1)
            expected_object_name = f'{instrumentCatalogDetail.media_path}'
            self.assertEquals(expected_object_name, '/rout detail here/')


class SlidersTest(TestCase):
    @classmethod
    def setUpTestData(cls):
            Sliders.objects.create(name='namesOfSlider', media_path='/rout slider here/')


    def test_title_content(self):
        sliders = Sliders.objects.get(id=1)
        expected_object_name = f'{sliders.name}'
        self.assertEquals(expected_object_name, 'namesOfSlider')


    def test_body_content(self):
        sliders = Sliders.objects.get(id=1)
        expected_object_name = f'{sliders.media_path}'
        self.assertEquals(expected_object_name, '/rout slider here/')
