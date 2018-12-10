import { Action } from '@ngrx/store';
export enum AppActionTypes {
       Loadcharacters = '[characters] loaded',
       LoadcharacterMovies = '[Movies] loading',
       LoadcharacterMoviesSuccess = '[Movies] loading Success',
       LoadcharacterMoviesFail = '[Movies] loading Fail',
       ChangeActivecharacter = '[characters] changed'
       
}

export class Loadcharacters implements Action{
    readonly type = AppActionTypes.Loadcharacters;
    constructor(public payload: Array<any>) {
    }
}

export class LoadcharacterMovies implements Action{
    readonly type = AppActionTypes.LoadcharacterMovies;
    constructor(public payload: any) {
    }
}

export class LoadcharacterMoviesSuccess implements Action{
    readonly type = AppActionTypes.LoadcharacterMoviesSuccess;
    constructor(public payload: Array<any>) {
    }
}

export class LoadcharacterMoviesFail implements Action{
    readonly type = AppActionTypes.LoadcharacterMoviesFail;
    constructor(public payload: any) {
    }
}


export class Changecharacters implements Action{
    readonly type = AppActionTypes.ChangeActivecharacter;
    constructor(public payload: any) {
    }
}

export type AppActions = Loadcharacters 
                        | Changecharacters
                        | LoadcharacterMovies
                        | LoadcharacterMoviesSuccess
                        | LoadcharacterMoviesFail