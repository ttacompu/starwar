import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarwarListComponent } from './starwar-list/starwar-list.component';
import {StoreModule} from '@ngrx/store';
import {reducers} from '../starwar/state/starwar.reducer'
import { EffectsModule } from '@ngrx/effects';
import {AppEffects} from './state/starwar.effect'
import { MenuComponent } from './menu/menu.component';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [StarwarListComponent, MenuComponent, ContentComponent],
  exports : [StarwarListComponent, MenuComponent, ContentComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature("starwar", reducers),
    EffectsModule.forFeature([AppEffects])
  ]
})
export class StarwarModule { }
