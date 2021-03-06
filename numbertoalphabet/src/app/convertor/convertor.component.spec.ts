import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KEYPAD_VALUES } from '../app-config';
import { ConvertorComponent } from './convertor.component';

describe('ConvertorComponent', () => {
  let component: ConvertorComponent;
  let fixture: ComponentFixture<ConvertorComponent>;
  let keypadContainer:HTMLElement;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate inputkeys', () => {
    component.inputKeys = KEYPAD_VALUES;
    fixture.detectChanges();
    keypadContainer = fixture.nativeElement.querySelector('div.keypad-container');
    expect(keypadContainer.children.length).toEqual(12);
  });
});
