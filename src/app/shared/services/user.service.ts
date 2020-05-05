import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { Constant } from "../utils/constant";
import { catchError, debounceTime } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUser(): Observable<any> {
    return this.http.get<any>(Constant.url)
      .pipe(catchError(this.handleError))

  }

  userId = new BehaviorSubject('');
  getUserId = this.userId.asObservable();

  handleError(error) {
    return throwError(error.message)
  }
}
