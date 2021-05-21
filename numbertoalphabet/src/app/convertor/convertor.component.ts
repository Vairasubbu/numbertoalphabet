import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-convertor',
  templateUrl: './convertor.component.html',
  styleUrls: ['./convertor.component.scss']
})
export class ConvertorComponent implements OnInit {
  @Input() inputKeys:any;
  @Output() onKeyClick = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  onInputClick(key:string) {
    this.onKeyClick.emit(key);
  }
}
