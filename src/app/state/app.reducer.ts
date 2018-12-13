import {AppActions, AppActionTypes} from './app.action';
import { createSelector } from '@ngrx/store';

export interface AppState{
    characters : Array<any>,
    movies : Array<any>,
    currentcharacter : string,
    error : string
}


const initAppState: AppState = {
    characters : [],
    movies : [],
    currentcharacter : '',
    error : ''
}

const getAppState = ((x:any) => x.appState );
export const getCharacters = createSelector(getAppState, (state:AppState)=> state.characters);
export const getMovies = createSelector(getAppState, (state:AppState)=> state.movies);
export const getCurrentCharacter = createSelector(getAppState, (state:AppState)=> state.currentcharacter);
export const getError =createSelector(getAppState, (state:AppState)=> state.error)

export function reducer( state : AppState = initAppState, action : AppActions ){
    switch(action.type){
        case AppActionTypes.Loadcharacters:
            return {
                ...state,
                characters : action.payload,
                error : ''
            }
            case AppActionTypes.ChangeActivecharacter:
              const withActivecharacters  =state.characters.map((x:any)=>{
                    if(x.name === action.payload){
                        x.active = true;
                    }else{
                        x.active = false;
                    }
                    return x;
                })
            return {
                ...state,
                characters : withActivecharacters,
                currentcharacter : action.payload,
                error : ''
            }
            case AppActionTypes.LoadcharacterMoviesSuccess:
            return {
                ...state,
                movies : action.payload,
                error : ''
            }

            case AppActionTypes.LoadcharacterMoviesFail:
            return {
                ...state,
                movies : [],
                error : action.payload
            }

        default : 
            return state;
    }
}