import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withRouterConfig, withInMemoryScrolling } from '@angular/router'; 
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';


export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    provideRouter(
      routes,
      withRouterConfig({ 
        onSameUrlNavigation: 'reload' 
      }),
      withInMemoryScrolling({
        scrollPositionRestoration: 'top', 
        anchorScrolling: 'enabled',
      }),
    ), 
    provideClientHydration()
  ]
};
