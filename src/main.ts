import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// Execution starts with main.ts , almost like main in a c or c# app
// THis is loading the module called AppModule
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
