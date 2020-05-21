from django_seed import Seed
from .models import *


def seed(amount, dependence):
    seeder = Seed.seeder()

    seeder.add_entity(InstrumentCatalog, amount,{
        'name' : lambda x: seeder.faker.company(),
        'media_path' : 'CatalogImg/construction-and-tools.svg'
        })

    seeder.add_entity(Companys, amount,{
        'name' : lambda x: seeder.faker.company(),
        'media_path' : 'metabo-logo.png'
    })

    seeder.add_entity(InstrumentCatalogDetail, amount,{
        'name' : lambda x: seeder.faker.company(),
        'media_path' : 'CatalogImg/construction-and-tools.svg'
    })

    seeder.add_entity(InstrumentCatalogDetailIntermediary, dependence)

    seeder.add_entity(Tools, dependence,{
        'name': lambda x: seeder.faker.company(),
        'vendor_code': lambda x: seeder.faker.ean(length = 8),
        'price' : lambda x : seeder.faker.random_int(min = 1, max = 1000),
        'wholesale_var'  : 1,
        'media_path' : 'ToolImg/lego-minifigure-toy-block-logo-lego.jpg',
        'amount' : lambda x: seeder.faker.random_int(min = 1, max = 500),
        'description' : lambda x: seeder.faker.paragraph(),
    })

    inserted_pks = seeder.execute()
    print(inserted_pks)
