import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpStatusService } from './services/httpStatusService'
import { environment } from '../environments/environment';
import * as fromApp from './state/app.reducer';
import * as appActions from './state/app.action'
import { Store, select } from '@ngrx/store';
import { characterService } from './services/characterService';
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
  
  loading = true;
  background = `url(${environment.alias}/assets/loading.gif) 50% 50% no-repeat #fff`
  characters =[];
  currentCharacter="";
  movies =[];
  
  
   private showMessage(msg, isError = false) {
    if (isError) {
      this.toastr.error(msg);
    } else {
      this.toastr.success(msg);
    }
  }
  

  constructor(private toastr: ToastrService, private httpStatusService :HttpStatusService, private characterService : characterService, private store: Store<fromApp.AppState>) {
  }



  ngOnInit() {
   this.subscriptions.add(this.httpStatusService.getHttpStatus().subscribe(status => {
      this.loading = status;
    }));
   
    this.store.dispatch(new appActions.Loadcharacters(this.characterService.getcharacters()))

  this.subscriptions.add(this.store.select(fromApp.getCharacters).subscribe(chracters => this.characters = chracters));
    this.subscriptions.add(this.store.select(fromApp.getCurrentCharacter).subscribe(currentCharacter => this.currentCharacter = currentCharacter));
    this.subscriptions.add(this.store.select(fromApp.getMovies).subscribe(movies => this.movies = movies));
    this.subscriptions.add(this.store.select(fromApp.getError).subscribe(err => {
          if(err){
            this.showMessage(err, true);
          }
    }));
  }

  getContent({name, url}){
    this.store.dispatch(new appActions.Changecharacters(name));
    this.store.dispatch(new appActions.LoadcharacterMovies(url))
  }

  ngOnDestroy(){
    this.subscriptions.unsubscribe();
  }

 
}
