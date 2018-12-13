import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { getCurrentCharacter } from '../state/app.reducer';




@Component({
  selector: 'adp-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentComponent implements OnInit {

  @Input()
  movies;

  @Input()
  currentCharacter;
  
  ngOnInit() {
    
  }

}
