import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ToastrModule, ToastContainerModule, ToastrService } from 'ngx-toastr';
import { HttpStatusService } from './services/httpStatusService';
import { characterService } from './services/characterService';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
describe('AppComponent', () => {
  let fixture:ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports : [
        ToastrModule.forRoot({}),
        ToastContainerModule,
        HttpClientModule,
        StoreModule.forRoot({})
      ],
      providers : [ToastrService, HttpStatusService, characterService],
      schemas : [NO_ERRORS_SCHEMA],
    
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
 /* it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));*/
});
