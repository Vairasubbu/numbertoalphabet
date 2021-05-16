import { Component, OnInit } from '@angular/core';
import {KEYPAD_VALUES} from './app-config';
import { ConvertorService } from './convertor.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'numbertoalphabet';
  keypadValues = KEYPAD_VALUES;
  inputField: string = '';
  outputField: string = '';

  constructor(private cs: ConvertorService) {}
  
  ngOnInit() {}

  onKeyPadClick(inputVal:string) {
    if(inputVal != '<-') {
      this.inputField = this.inputField+''+inputVal;
    } else {
      this.inputField = String(this.inputField).slice(0, -1);
    }

    this.outputField = this.cs.convertNumberToAlphabet(this.inputField);
  }
}
