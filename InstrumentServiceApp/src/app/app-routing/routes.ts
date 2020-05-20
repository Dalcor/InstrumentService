import { Routes } from '@angular/router';


import { HomeComponent } from '../home/home.component';
import { ContactsComponent } from '../contacts/contacts.component';
import { DetailsComponent } from '../details/details.component';
import { DetailComponent } from '../detail/detail.component';
import { CatalogComponent } from '../catalog/catalog.component';


const catalogRoute: Routes = [
    {path: 'catalog', component: CatalogComponent}
]

export const routes: Routes = [
    {path: '', component: HomeComponent, pathMatch: 'full', children: catalogRoute},
    {path: ':tool/:detail', component: DetailsComponent},
    {path: 'details', redirectTo: '', pathMatch: 'full'},
    {path: ':tool/:detail/:vendor', component: DetailComponent},
    {path: 'contacts', component: ContactsComponent}
]