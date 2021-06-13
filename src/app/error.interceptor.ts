import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { CommonService } from './shared';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private commonService: CommonService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    return next.handle(request).pipe(
      catchError((err) => {
        this.commonService.showError(err.error.message || err.statusText);
        return throwError(err);
      })
    );
  }
}
