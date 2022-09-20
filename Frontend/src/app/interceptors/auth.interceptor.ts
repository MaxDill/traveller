import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {catchError, Observable, of, throwError} from 'rxjs';
import {Router} from "@angular/router";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const idToken = localStorage.getItem("access_token");

    if (idToken) {
      const cloned = req.clone({
        headers: req.headers.set("Authorization",
          "Bearer " + idToken)
      });

      return next.handle(cloned).pipe(catchError(x=> this.handleAuthError(x)));;
    }
    else {
      return next.handle(req).pipe(catchError(x=> this.handleAuthError(x)));;
    }
  }

  private handleAuthError(err: HttpErrorResponse): Observable<any> {
    if (err.status === 401 || err.status === 403) {
      localStorage.removeItem('access_token_expires_at');
      localStorage.removeItem('access_token');
      // TODO refresh token
      this.router.navigateByUrl(`/login`);
      return of(err.message);
    }
    return throwError(() => err);
  }

}
