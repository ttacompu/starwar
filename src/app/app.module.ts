/*default modules */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule, ToastContainerModule } from 'ngx-toastr';

/* Component sections*/ 
import { AppComponent } from './app.component';


/* ngRx*/
import { StoreModule } from '@ngrx/store'
import { HttpStatusService } from './services/httpStatusService';
import { WinAuthInterceptor } from './services/winAuthInterceptor';
import { CharacterService } from './services/characterService';
import { StarwarModule } from './starwar/starwar.module';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    BrowserAnimationsModule,
    HttpClientModule,
    StarwarModule,
    ToastrModule.forRoot( 
      {
        closeButton: true,
        timeOut : 1000
      }),
    ToastContainerModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([])
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: WinAuthInterceptor,
      multi: true
    },
      HttpStatusService,
      CharacterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
