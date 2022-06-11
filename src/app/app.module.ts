import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { WelcomeSelectionComponent } from './welcome-selection/welcome-selection.component';
import { FooterComponent } from './footer/footer.component';
import { WidgetConnectComponent } from './widget-connect/widget-connect.component';
import { RandomNftComponent } from './random-nft/random-nft.component';
import { ComponentNftComponent } from './component-nft/component-nft.component';

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
    AppRoutingModule
  ],
  providers: [],
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
