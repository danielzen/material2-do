import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { Material2DoAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(Material2DoAppComponent);

