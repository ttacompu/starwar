interface StarwarListState{
    characters : Array<any>,
    movies : Array<any>,
    currentcharacter : string,
    error : string
}
export interface StarwarState{
    Starwar : StarwarListState
}