import { Injectable } from '@angular/core';
import { ALBHABETS } from './app-config';
@Injectable({
  providedIn: 'root'
})
export class ConvertorService {

  constructor() { }

  convertNumberToAlphabet(input: string) : string {
    if(input) {
      const inputArr = input.split('#');
      const outputArr = inputArr.map(element => { 
        return ALBHABETS[parseInt(element) % 26] ? ALBHABETS[parseInt(element) % 26] : '';        
      });
      return outputArr.join('').trim();
    } else {
      return '';
    }
    
  }
}
