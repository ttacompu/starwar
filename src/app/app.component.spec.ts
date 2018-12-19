import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ToastrModule, ToastContainerModule, ToastrService } from 'ngx-toastr';
import { HttpStatusService } from './services/httpStatusService';
import { CharacterService } from './services/characterService';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule, Store } from '@ngrx/store';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import * as fromApp from './state/app.reducer';


describe('AppComponent', () => {
  let fixture:ComponentFixture<AppComponent>;

  let mockToastrService =  jasmine.createSpyObj(['error', 'success']);
  let mockHttpStatusService = jasmine.createSpyObj(['getHttpStatus']);
  let mockStoreService = jasmine.createSpyObj(['select', 'dispatch']);

  let httpTestingController
  let characterService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports : [
        HttpClientTestingModule,
        ToastrModule.forRoot({}),
        ToastContainerModule,
        HttpClientModule,
        StoreModule.forRoot({})
      ],
      providers : [
        {provide : ToastrService, useValue : mockToastrService}, 
        {provide: HttpStatusService, useValue :mockHttpStatusService }, 
        CharacterService,
        {provide : Store, useValue : mockStoreService }
      ],
      schemas : [NO_ERRORS_SCHEMA],
    
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    httpTestingController = TestBed.get(HttpTestingController);
    characterService = TestBed.get(CharacterService);

  }));
  it('should create the app', async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should assgin to component state variabls', async( ()=>{
    fixture.componentInstance.loading = true;
    fixture.componentInstance.background ='red';
    fixture.componentInstance.characters = [{name : 'obi'}];
    fixture.componentInstance.currentCharacter = 'obi';
    fixture.componentInstance.movies = [{ name : 'starwar'}];
    expect(fixture.componentInstance.loading).toEqual(true);
    expect(fixture.componentInstance.background).toEqual('red');
  }))

  it(`should spinner should hide`, async(() => {
    mockHttpStatusService.getHttpStatus.and.returnValue(of(false));
    mockStoreService.select.and.returnValue(of({}));
    fixture = TestBed.createComponent(AppComponent);
    fixture.componentInstance.loading = true;
    fixture.detectChanges();

    const character=fixture.debugElement.query(By.css(".loading"));
    expect(character.nativeElement.hidden).toBe(true);

  }));
  it('should spinner div background has loading gif ', async(() => {
    mockHttpStatusService.getHttpStatus.and.returnValue(of(false));
    mockStoreService.select.and.returnValue(of({}));
    fixture = TestBed.createComponent(AppComponent);
    fixture.componentInstance.loading = true;
    fixture.detectChanges();
    const character=fixture.debugElement.query(By.css(".loading"));
    expect(character.nativeElement.style.background).toContain("loading.gif");

  }));
});
