import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarwarListComponent } from './starwar-list.component';

describe('StarwarListComponent', () => {
  let component: StarwarListComponent;
  let fixture: ComponentFixture<StarwarListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarwarListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarwarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
