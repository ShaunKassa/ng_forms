import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { SKUAppModule } from './app.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(SKUAppModule);

