import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ConvertorComponent } from './convertor/convertor.component';
import { componentFactoryName } from '@angular/compiler';

describe('AppComponent', () => {
  let fixture: any;
  let app: any;
  let divElement: HTMLElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        ConvertorComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    divElement = fixture.nativeElement.querySelector('div.wrapper');
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'numbertoalphabet'`, () => {
    expect(app.title).toEqual('numbertoalphabet');
  });

  it('should div.wrapper has 3 child elements', ()=> {
    expect(divElement.children.length).toEqual(3);
  });

  it('should validate first child element has class name input-field', ()=>{
    expect(divElement.firstChild).toHaveClass('input-field');
  });
  
  it('should validate app convertor first child has keypad-container', ()=>{
    const appConvertor = fixture.nativeElement.querySelector('app-convertor');
    expect(appConvertor.firstChild).toHaveClass('keypad-container');
  });
});
