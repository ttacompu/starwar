import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { characterService } from "../services/characterService";
import * as fromApp from './app.reducer';
import * as appActions from './app.action'
import { mergeMap, map, catchError, tap, switchMap } from "rxjs/operators";
import { of, throwError } from "rxjs";

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private characterService: characterService) {
  }

  @Effect()
  loadRequest$ = this.actions$.pipe(ofType(appActions.AppActionTypes.LoadcharacterMovies), switchMap((action:appActions.LoadcharacterMovies)=>{
    return this.characterService.getFirmsUrl(action.payload)
    .pipe(map(results => new appActions.LoadcharacterMoviesSuccess(results)), catchError(err =>{return  of(new appActions.LoadcharacterMoviesFail('network error!'))} ))
  }))
}