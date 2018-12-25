import { Action } from '@ngrx/store';
import * as CONSTANTS from './app.action.constant'

const loadCharacterAction :any = (payload) => ({type: CONSTANTS.LOADCHARACTERS, payload});
const loadCharacterMoviesAction : any = (payload) => ({type : CONSTANTS.LOADCHARACTERMOVIES, payload});
const loadCharacterMovieSucessAction : any = (payload) => ({type : CONSTANTS.LOADCHARACTERMOVIESSUCCESS, payload});
const loadCharacterMovieFailAction : any = (payload) => ({type : CONSTANTS.LOADCHARACTERMOVIESFAIL, payload});
const changeCharactersAction : any = (payload) => ({type : CONSTANTS.CHANGEACTIVECHARACTER, payload});
export {loadCharacterAction,loadCharacterMoviesAction,loadCharacterMovieSucessAction,
    loadCharacterMovieFailAction, changeCharactersAction };
