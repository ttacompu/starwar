import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { ChracterService } from "../services/chracterService";
import * as fromApp from './app.reducer';
import * as appActions from './app.action'
import { mergeMap, map, catchError } from "rxjs/operators";
import { of } from "rxjs";

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private chracterService: ChracterService) {
  }

  @Effect()
  loadRequest$ = this.actions$.pipe(ofType(appActions.AppActionTypes.LoadChracterMovies), 
      mergeMap((action:appActions.LoadChracterMovies)=> 
      this.chracterService.getFirmsUrl(action.payload)
      .pipe(map(contents => new appActions.LoadChracterMoviesSuccess(contents),  
      catchError(err => of(new appActions.LoadChracterMoviesFail("possibly network error")) ))
  )))
}