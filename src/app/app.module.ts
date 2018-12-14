/*default modules */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule, ToastContainerModule } from 'ngx-toastr';

/* Component sections*/ 
import { AppComponent } from './app.component';
import {MenuComponent} from './menu/menu.component'
import { ContentComponent } from './content/content.component';

/* ngRx*/
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects';
import { HttpStatusService } from './services/httpStatusService';
import { WinAuthInterceptor } from './services/winAuthInterceptor';

import {reducer } from './state/app.reducer';
import { characterService } from './services/characterService';
import {AppEffects} from './state/app.effect'

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot( 
      {
        closeButton: true,
        timeOut : 1000
      }),
    ToastContainerModule,
    StoreModule.forRoot({appState : reducer}),
    EffectsModule.forRoot([AppEffects]),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: WinAuthInterceptor,
      multi: true
    },
      HttpStatusService,
      characterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
