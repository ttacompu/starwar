import {StarwarState, StarwarListState } from './starwar.state';
import * as CONSTANTS  from './starwar.constants';
import { ActionReducerMap } from '@ngrx/store';

const initState : StarwarListState ={
    loading : false,
    characters : [],
    movies : [],
    currentcharacter : '',
    error : '',

}

export function starwarReducer(state = initState , action ) : StarwarListState{
    switch(action.type){
        case CONSTANTS.LOADINGSUCCESS:
        return {
            ...state,
            loading : action.payload
        }
        case CONSTANTS.LOADCHARACTERSSUCCESS:
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


export const reducers : ActionReducerMap<StarwarState> = {
    Starwar : starwarReducer
}