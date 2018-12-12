import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';




@Component({
  selector: 'adp-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentComponent implements OnInit {

  @Input()
  data;
  
  ngOnInit() {
    
  }

}
