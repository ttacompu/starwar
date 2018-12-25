import { createSelector } from '@ngrx/store';
import * as CONSTANTS from './app.action.constant';

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

export function reducer( state : AppState = initAppState, action ){
    switch(action.type){
        case CONSTANTS.LOADCHARACTERS:
            return {
                ...state,
                characters : action.payload,
                error : ''
            }
            case CONSTANTS.CHANGEACTIVECHARACTER:
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
            case CONSTANTS.LOADCHARACTERMOVIESSUCCESS:
            return {
                ...state,
                movies : action.payload,
                error : ''
            }

            case CONSTANTS.LOADCHARACTERMOVIESFAIL:
            return {
                ...state,
                movies : [],
                error : action.payload
            }

        default : 
            return state;
    }
}