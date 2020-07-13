import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { NgxPaginationModule } from 'ngx-pagination';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { SliderService } from '../services/slider.service';
import { ToolService } from '../services/tool.service';
import { CookieService } from 'ngx-cookie-service';
import { CartService } from '../services/cart.service';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import 'hammerjs';

import { HttpClientModule } from '@angular/common/http';

import { DetailsComponent } from './details/details.component';
import { DetailComponent } from './detail/detail.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CartComponent } from './cart/cart.component';

import { FilterPipe } from '../pipes/filter.pipe';

import { CheckoutComponent } from './checkout/checkout.component';



import { Ng5SliderModule } from 'ng5-slider';
import { PricePipe } from '../pipes/price.pipe';
import { AboutusComponent } from './aboutus/aboutus.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ToolsResolver } from 'src/services/tools-resolver.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactsComponent,
    HomeComponent,
    DetailsComponent,
    DetailComponent,
    CatalogComponent,
    CartComponent,
    FilterPipe,
    CheckoutComponent,
    PricePipe,
    AboutusComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    SlickCarouselModule,
    HttpClientModule,
    NgxPaginationModule,
    Ng5SliderModule
    ],
  providers: [
    SliderService,
    ToolService,
    CookieService,
    CartService,
    ToolsResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
