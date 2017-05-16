import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment as environmentPromise } from './environments/environment';

environmentPromise.then(environment => {

  if (environment["production"]) {
    enableProdMode();
  }

  platformBrowserDynamic().bootstrapModule(AppModule);

});
