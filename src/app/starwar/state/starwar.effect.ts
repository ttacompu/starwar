import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { CharacterService } from "../../services/characterService";
import { loadCharacterMovieSucessAction, loadCharacterMovieFailAction, loadStatusSuccessAction, loadCharacterSuccessAction} from './starwar.action'
import *  as CONSTANTS from './starwar.constants'
import { mergeMap, map, catchError, tap, switchMap } from "rxjs/operators";
import { of, throwError } from "rxjs";
import { HttpStatusService } from "../../services/httpStatusService";

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private characterService: CharacterService,  private httpStatusService: HttpStatusService) {
  }

  @Effect()
  loadRequest$ = this.actions$.pipe(ofType(CONSTANTS.LOADCHARACTERMOVIES), switchMap((action:any)=>{
    return this.characterService.getFirmsUrl(action.payload)
    .pipe(map(loadCharacterMovieSucessAction), catchError( err => of(loadCharacterMovieFailAction("network error!"))  ))
  }))

  @Effect()
  loadStatus$ = this.actions$.pipe(ofType(CONSTANTS.LOADING), switchMap((action:any)=>{
    return this.httpStatusService.getHttpStatus()
    .pipe(map(loadStatusSuccessAction))
  }))

  @Effect()
  loadCharacters = this.actions$.pipe(ofType(CONSTANTS.LOADCHARACTERS), switchMap((action:any)=>{
    return this.characterService.getCharacters()
    .pipe(map(loadCharacterSuccessAction))
  }))

  
}