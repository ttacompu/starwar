import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { mergeMap, map, tap, catchError } from "rxjs/operators";
import { forkJoin, of, throwError } from "rxjs";
import * as R from 'ramda';

@Injectable()
export class CharacterService {
  constructor(private http_: HttpClient) {
    //this.getUserInfo();
  }
    getCharacters(){
        return of(  [{
            "name": "Luke Skywalker",
            "url": "https://swapi.co/api/people/1/"
          },
          {
            "name": "Darth Vader",
            "url": "https://swapi.co/api/people/4/"
          },
          {
            "name": "Obi-wan Kenobi",
            "url": "https://swapi.co/api/people/unknown/"
          }, 
          {
            "name": "R2-D2",
            "url": "https://swapi.co/api/people/3/"
          }]);
    }



    getFirmsUrl(url) {
      return this.http_.get(url).pipe(map((x:any)=> x.films), mergeMap(urls =>{
        const requests = urls.map(x => this.http_.get(x));
      return forkJoin(requests).pipe(map((results:any)=> R.sortBy(R.prop('release_date'), results.map(x=>{
        return {
          ...x,
          release_date : new Date(x.release_date)
        }
      }) )
      
      ))

      }), catchError(err =>{
        return throwError(err)
      }))
      
    }

    /*getFilmsContent(urls){
      const requests = urls.map(x => this.http_.get(x));
      return forkJoin(requests).pipe(map((results:any)=> results.map(x=>{
        return {
          ...x,
          release_date : new Date(x.release_date)
        }
      }) ))
    }*/
  
}