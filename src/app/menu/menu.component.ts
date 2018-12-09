import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'adp-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input()
  dataList;

  @Output()
  sendUrl=new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  menuClick(e, {name, url}){
    e.preventDefault();
    this.sendUrl.emit({name, url});
  }

}
