import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { WelcomeSelectionComponent } from './components/welcome-selection/welcome-selection.component';
import { FooterComponent } from './components/footer/footer.component';
import { WidgetConnectComponent } from './components/widget-connect/widget-connect.component';
import { RandomNftComponent } from './components/random-nft/random-nft.component';
import { ComponentNftComponent } from './components/component-nft/component-nft.component';

import { GetServices } from './services/get.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ImageSliderComponent,
    JumbotronComponent,
    WelcomeSelectionComponent,
    FooterComponent,
    WidgetConnectComponent,
    RandomNftComponent,
    ComponentNftComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GetServices],
  bootstrap: [
    AppComponent,
    NavbarComponent,
    ImageSliderComponent,
    JumbotronComponent,
    WelcomeSelectionComponent,
    FooterComponent,
    WidgetConnectComponent,
    RandomNftComponent,
    ComponentNftComponent
  ]
})
export class AppModule { }
