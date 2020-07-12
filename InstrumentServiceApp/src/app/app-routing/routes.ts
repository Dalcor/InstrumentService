import { Routes } from '@angular/router';


import { HomeComponent } from '../home/home.component';
import { ContactsComponent } from '../contacts/contacts.component';
import { DetailsComponent } from '../details/details.component';
import { DetailComponent } from '../detail/detail.component';
import { CartComponent } from '../cart/cart.component';
import { CheckoutComponent } from '../checkout/checkout.component';
import { AboutusComponent } from '../aboutus/aboutus.component';




export const routes: Routes = [
    {path: '', component: HomeComponent, pathMatch: 'full'},
    {path: ':tool/:detail', component: DetailsComponent},
    {path: 'details', redirectTo: '', pathMatch: 'full'},
    {path: ':tool/:detail/:vendor', component: DetailComponent},
    {path: 'contacts', component: ContactsComponent},
    {path: 'aboutus', component: AboutusComponent},
    {path: 'cart', component: CartComponent},
    {path: 'checkout', component: CheckoutComponent}
]