import { TestBed, waitForAsync } from '@angular/core/testing';

import { HelperService } from './helper.service';
import { MenuColor } from '../Enums/menu-tabs.enum';

describe('HelperService', () => {
  let service: HelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initially set brandColor$ to green', waitForAsync(() => {
    service.brandColor$.subscribe(result => {
      expect(result).toBe(MenuColor.Green)
    })

  }));

  it('should initially set isLoading$ to false', waitForAsync(() => {
    service.isLoading$.subscribe(result => {
      expect(result).toBeFalse()
    })

  }));
  
});
