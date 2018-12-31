import { StarwarState } from "../starwar/state/starwar.state";
import { createSelector } from "@ngrx/store";

export interface AppState{
    starwar : StarwarState
}

