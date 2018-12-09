import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpStatusService } from './services/httpStatusService'
import { environment } from '../environments/environment';
import * as fromApp from './state/app.reducer';
import * as appActions from './state/app.action'
import { Store, select } from '@ngrx/store';
import { ChracterService } from './services/chracterService';
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild(ToastContainerDirective) toastContainer: ToastContainerDirective;
  subscriptions:Subscription = new Subscription();

  title = 'app';
  loading = true;
  background = `url(${environment.alias}/assets/loading.gif) 50% 50% no-repeat #fff`
  chracters =[];
  movieContent ={
    movies : [],
    chracter : null
  }
  
   private showMessage(msg, isError = false) {
    if (isError) {
      this.toastr.error(msg);
    } else {
      this.toastr.success(msg);
    }
  }
  

  constructor(private toastr: ToastrService, private httpStatusService :HttpStatusService, private chracterService : ChracterService, private store: Store<fromApp.AppState>) {
  }



  ngOnInit() {
   this.subscriptions.add(this.httpStatusService.getHttpStatus().subscribe(status => {
      this.loading = status;
    }));
   this.subscriptions.add( this.store.pipe(select('appState'), map((x:fromApp.AppState)=>x.chracters)).subscribe(
        results => {
          if(results.length){
            this.chracters = results
          }
        }
      ))

      this.subscriptions.add( this.store.pipe(select('appState'), map((x:fromApp.AppState)=>{
        return {
          movies : x.movies,
          currentChracter : x.currentChracter
        }
      })).subscribe(
        data => {
          this.movieContent.movies = data.movies;
          this.movieContent.chracter = data.currentChracter
        }
      ))

    this.subscriptions.add(this.store.pipe(select('appState'), map((x:fromApp.AppState)=>x.error)).subscribe(error =>{if(error){
      this.showMessage(error, true)
    }}));
    this.store.dispatch(new appActions.LoadChracters(this.chracterService.getChracters()))
    
   
    
  }


  getContent({name, url}){
    this.store.dispatch(new appActions.ChangeChracters(name));
    this.store.dispatch(new appActions.LoadChracterMovies(url))
  }

  ngOnDestroy(){
    this.subscriptions.unsubscribe();
  }

 
}