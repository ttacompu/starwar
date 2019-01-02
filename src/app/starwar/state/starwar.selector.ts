import { createFeatureSelector, createSelector } from "@ngrx/store";
import { StarwarState } from "./starwar.state";

export const getStarwarState = createFeatureSelector<StarwarState>('starwar');
export const getCharacters = createSelector(getStarwarState, (x:StarwarState)=>x.Starwar.characters);
export const getCurrentChracter = createSelector(getStarwarState, (x:StarwarState)=>x.Starwar.currentcharacter);
export const getMovies = createSelector(getStarwarState, (x:StarwarState)=>x.Starwar.movies);
export const getError = createSelector(getStarwarState, (x:StarwarState)=>x.Starwar.error);
export const getStatus = createSelector(getStarwarState, (x:StarwarState)=>x.Starwar.loading);