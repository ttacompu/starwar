export interface StarwarListState{
    characters : Array<any>,
    movies : Array<any>,
    currentcharacter : string,
    error : string,
    loading : boolean
}
export interface StarwarState{
    Starwar : StarwarListState
}