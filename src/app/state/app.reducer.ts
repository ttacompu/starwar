import {AppActions, AppActionTypes} from './app.action';
import { select, createSelector, createFeatureSelector } from '@ngrx/store';

export interface AppState{
    chracters : Array<any>,
    movies : Array<any>,
    currentChracter : string,
    error : string
}


const initAppState: AppState = {
    chracters : [],
    movies : [],
    currentChracter : '',
    error : ''
}

export function reducer( state : AppState = initAppState, action : AppActions ){
    switch(action.type){
        case AppActionTypes.LoadChracters:
            return {
                ...state,
                chracters : action.payload,
                error : ''
            }
            case AppActionTypes.ChangeActiveChracter:
              const withActiveChracters  =state.chracters.map((x:any)=>{
                    if(x.name === action.payload){
                        x.active = true;
                    }else{
                        x.active = false;
                    }
                    return x;
                })
            return {
                ...state,
                chracters : withActiveChracters,
                currentChracter : action.payload,
                error : ''
            }
            case AppActionTypes.LoadChracterMoviesSuccess:
            return {
                ...state,
                movies : action.payload,
                error : ''
            }

            case AppActionTypes.LoadChracterMoviesFail:
            return {
                ...state,
                movie : [],
                error : action.payload
            }

        default : 
            return state;
    }
}