import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { ChracterService } from "../services/chracterService";
import * as fromApp from './app.reducer';
import * as appActions from './app.action'
import { mergeMap, map, catchError, tap } from "rxjs/operators";
import { of, throwError } from "rxjs";

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private chracterService: ChracterService) {
  }

  @Effect()
  loadRequest$ = this.actions$.pipe(ofType(appActions.AppActionTypes.LoadChracterMovies), mergeMap((action:appActions.LoadChracterMovies)=>{
    return this.chracterService.getFirmsUrl(action.payload).pipe(map(results => new appActions.LoadChracterMoviesSuccess(results)))
  }),  catchError(err =>{return  of(new appActions.LoadChracterMoviesFail('network error!'))} ))
}