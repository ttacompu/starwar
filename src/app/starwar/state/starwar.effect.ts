import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { CharacterService } from "../../services/characterService";
import { loadCharacterMovieSucessAction, loadCharacterMovieFailAction} from './starwar.action'
import *  as CONSTANTS from './starwar.constants'
import { mergeMap, map, catchError, tap, switchMap } from "rxjs/operators";
import { of, throwError } from "rxjs";

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private characterService: CharacterService) {
  }

  @Effect()
  loadRequest$ = this.actions$.pipe(ofType(CONSTANTS.LOADCHARACTERMOVIES), switchMap((action:any)=>{
    return this.characterService.getFirmsUrl(action.payload)
    .pipe(map(loadCharacterMovieSucessAction), catchError( err => of(loadCharacterMovieFailAction("network error!"))  ))
  }))

  
}