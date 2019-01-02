import { Action } from '@ngrx/store';
import * as CONSTANTS from './starwar.constants'

const loadCharacterAction :any = () => ({type: CONSTANTS.LOADCHARACTERS});
const loadCharacterSuccessAction : any = (payload) =>({type : CONSTANTS.LOADCHARACTERSSUCCESS, payload});
const loadCharacterMoviesAction : any = (payload) => ({type : CONSTANTS.LOADCHARACTERMOVIES, payload});
const loadCharacterMovieSucessAction : any = (payload) => ({type : CONSTANTS.LOADCHARACTERMOVIESSUCCESS, payload});
const loadCharacterMovieFailAction : any = (payload) => ({type : CONSTANTS.LOADCHARACTERMOVIESFAIL, payload});
const changeCharactersAction : any = (payload) => ({type : CONSTANTS.CHANGEACTIVECHARACTER, payload});
const loadStatusAction = () =>({type : CONSTANTS.LOADING});
const loadStatusSuccessAction = (payload) =>({type : CONSTANTS.LOADINGSUCCESS, payload});

export {loadCharacterAction, loadCharacterSuccessAction, loadCharacterMoviesAction,loadCharacterMovieSucessAction,
    loadCharacterMovieFailAction, changeCharactersAction, loadStatusAction, loadStatusSuccessAction };
