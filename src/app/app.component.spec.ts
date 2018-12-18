import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ToastrModule, ToastContainerModule, ToastrService } from 'ngx-toastr';
import { HttpStatusService } from './services/httpStatusService';
import { CharacterService } from './services/characterService';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
describe('AppComponent', () => {
  let fixture:ComponentFixture<AppComponent>;

  let mockToastrService =  jasmine.createSpyObj(['error', 'success']);
  let mockHttpStatusService = jasmine.createSpyObj(['getHttpStatus']);
  let mockCharacterService = jasmine.createSpyObj(['getCharacters']);

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
      providers : [
        {provide : ToastrService, useValue : mockToastrService}, 
        {provide: HttpStatusService, useValue :mockHttpStatusService }, 
        {provide : CharacterService, userValue : mockCharacterService }],
      schemas : [NO_ERRORS_SCHEMA],
    
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
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

  it(`should spinner should show`, async(() => {
    mockHttpStatusService.getHttpStatus.and.returnValue(of(true));
    mockCharacterService.getCharacters.and.returnValue(of([]));
    fixture = TestBed.createComponent(AppComponent);
    fixture.componentInstance.loading = true;
    fixture.detectChanges();

    const character=fixture.debugElement.query(By.css(".loading"));
    expect(character.nativeElement).toBeTruthy()
  }));
  /*it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));*/
});
