import { Action } from '@ngrx/store';
export enum AppActionTypes {
       LoadChracters = '[Chracters] loaded',
       LoadChracterMovies = '[Movies] loading',
       LoadChracterMoviesSuccess = '[Movies] loading Success',
       LoadChracterMoviesFail = '[Movies] loading Fail',
       ChangeActiveChracter = '[Chracters] changed'
       
}

export class LoadChracters implements Action{
    readonly type = AppActionTypes.LoadChracters;
    constructor(public payload: Array<any>) {
    }
}

export class LoadChracterMovies implements Action{
    readonly type = AppActionTypes.LoadChracterMovies;
    constructor(public payload: any) {
    }
}

export class LoadChracterMoviesSuccess implements Action{
    readonly type = AppActionTypes.LoadChracterMoviesSuccess;
    constructor(public payload: Array<any>) {
    }
}

export class LoadChracterMoviesFail implements Action{
    readonly type = AppActionTypes.LoadChracterMoviesFail;
    constructor(public payload: any) {
    }
}


export class ChangeChracters implements Action{
    readonly type = AppActionTypes.ChangeActiveChracter;
    constructor(public payload: any) {
    }
}

export type AppActions = LoadChracters 
                        | ChangeChracters
                        | LoadChracterMovies
                        | LoadChracterMoviesSuccess
                        | LoadChracterMoviesFail