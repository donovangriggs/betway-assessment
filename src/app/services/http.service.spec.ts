import { TestBed, waitForAsync } from '@angular/core/testing';

import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, of } from 'rxjs';

const mockData = {
    "accountId": "7f6dgh38-2h3h-4lko-7ssj-1b0d3f3fbv6b",
    "accountStatus": "verified",
    "name": "John Doe",
    "registeredCountry": "GBR"
  }

const mockErr: HttpErrorResponse = new HttpErrorResponse({
  status: 404
})

describe('HttpService', () => {
  let httpTestingController: HttpTestingController;
  let service: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule, HttpClientTestingModule],
    });
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.inject(HttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call login and return logged in user', () => {
    service.login('email', 'password').subscribe((res) => {
      expect(res).toEqual(mockData);
    });
    const req = httpTestingController.expectOne({
      method: 'POST',
      url: `${environment.apiBaseUrl}/api/sign-in`,
    });
    req.flush(mockData);
  });

});
