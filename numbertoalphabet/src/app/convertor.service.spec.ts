import { TestBed } from '@angular/core/testing';

import { ConvertorService } from './convertor.service';

describe('ConvertorServiceService', () => {
  let service: ConvertorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConvertorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should validate numbertoalphabet convertor function', () => {
    const inputVal = '12#32#54';
    const outputVal = service.convertNumberToAlphabet(inputVal);
    expect(outputVal).toEqual('MGC');
  });

  it('should validate numbertoalphabet convertor function', () => {
    const inputVal = '';
    const outputVal = service.convertNumberToAlphabet(inputVal);
    expect(outputVal).toEqual('');
  });
});
