import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpEvent,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError, finalize, map } from 'rxjs/operators';
import { HttpStatusService } from './httpStatusService'
import { throwError } from 'rxjs';



@Injectable()
export class WinAuthInterceptor implements HttpInterceptor {
  constructor(private httpStatusService: HttpStatusService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      headers: new HttpHeaders({
          'Content-Type': 'application/json; charset=utf-8'
      })
    })
    return next.handle(req).pipe(map(event => { this.httpStatusService.setHttpStatus(true); return event; }),
     catchError(error => { this.httpStatusService.setHttpStatus(false); return throwError(error) }), 
    finalize(() => {
      this.httpStatusService.setHttpStatus(false);
    }));  
  }
}
