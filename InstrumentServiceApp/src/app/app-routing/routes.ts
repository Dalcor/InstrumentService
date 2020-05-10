import { Routes } from '@angular/router';


import { HomeComponent } from '../home/home.component';
import { ContactsComponent } from '../contacts/contacts.component';
import { DetailsComponent } from '../details/details.component';


export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'details/:tool', component: DetailsComponent},
    {path: 'details', redirectTo: 'home', pathMatch: 'full'},
    {path: 'contacts', component: ContactsComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'}
]