import {StarwarState} from './starwar.state';
import * as CONSTANTS  from './starwar.constants';
import { ActionReducerMap } from '@ngrx/store';

export function starwarReducer(state , action ){
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


export const reducers : ActionReducerMap<StarwarState> = {
    Starwar : starwarReducer
}