import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { HttpStatusService } from '../../services/httpStatusService';
import { CharacterService } from '../../services/characterService';
import { AppState } from '../../state/app.state';
import { Store } from '@ngrx/store';
import * as appActions from '../state/starwar.action'
import * as selectors from '../state/starwar.selector';


@Component({
  selector: 'app-starwar-list',
  templateUrl: './starwar-list.component.html',
  styleUrls: ['./starwar-list.component.css']
})
export class StarwarListComponent implements OnInit {

  @ViewChild(ToastContainerDirective) toastContainer: ToastContainerDirective;
  subscriptions: Subscription = new Subscription();

  loading = true;
  background = `url(/assets/loading.gif) 50% 50% no-repeat #fff`
  characters = [];
  currentCharacter = "";
  movies = [];


  private showMessage(msg, isError = false) {
    setTimeout(() => {
      if (isError) {
        this.toastr.error(msg);
      } else {
        this.toastr.success(msg);
      }
    })
  }


  constructor(private toastr: ToastrService, private httpStatusService: HttpStatusService, 
    private characterService: CharacterService, private store: Store<AppState>) {
  }

  ngOnInit() {
    this.subscriptions.add(this.httpStatusService.getHttpStatus().subscribe(status => {
      this.loading = status;

    }));

    this.characterService.getCharacters().subscribe(chars => {
      this.store.dispatch(appActions.loadCharacterAction(chars))
    })
    this.store.select(selectors.getCharacters).subscribe(chracters => this.characters = chracters);
    this.store.select(selectors.getCurrentChracter).subscribe(currentCharacter => this.currentCharacter = currentCharacter);
    this.store.select(selectors.getMovies).subscribe( movies => this.movies = movies);
    this.store.select(selectors.getError).subscribe(err =>{
      if (err) {
        this.showMessage(err, true);
      }
    });

   /* this.subscriptions.add(this.store.select(fromApp.getCharacters).subscribe(chracters => this.characters = chracters));
    this.subscriptions.add(this.store.select(fromApp.getCurrentCharacter).subscribe(currentCharacter => this.currentCharacter = currentCharacter));
    this.subscriptions.add(this.store.select(fromApp.getMovies).subscribe(movies => this.movies = movies));
    this.subscriptions.add(this.store.select(fromApp.getError).subscribe(err => {
      if (err) {
        this.showMessage(err, true);

      }
    }));*/
  }

  getContent({ name, url }) {
    this.store.dispatch(appActions.changeCharactersAction(name));
    this.store.dispatch(appActions.loadCharacterMoviesAction(url))
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }



}
