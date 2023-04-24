import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { HelperService } from './helper.service';
import { environment } from 'src/environments/environment';
import { finalize } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient,
    private helper: HelperService
  ) { }

  login(username: string, password: string): Observable<any>{
    this.helper.isLoading$.next(true)
    return this.http.post(`${environment.apiBaseUrl}/api/sign-in`, {
      email: username,
      password
    })
    .pipe(
      retry(3),
      finalize(() => {
        this.helper.isLoading$.next(false)
      }),
      catchError((err) => this.handleError(err))
    )
  }

  handleError(error: HttpErrorResponse){
    console.log(error)
    this.helper.isLoading$.next(false)
    return throwError(() => new Error(error?.message))
  }
}
