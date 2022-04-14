import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';

// Declares and imports a component called AppComponent.

@NgModule({
  // Any time a new component is generated it is added here
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
  ],
  // Import necessary modules
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  // For registering services
  providers: [],
  // Starts a component called AppComponent.
  // The view associated with this component is rendered to the browser
  // at the defined placeholder within the index.html file
  bootstrap: [AppComponent]
})
export class AppModule { }
