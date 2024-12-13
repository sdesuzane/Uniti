import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authToken = localStorage.getItem('authToken');

    if (authToken) {
      req = req.clone({
        setHeaders: {
          Accept: 'application/json',
          Authorization: `Bearer ${authToken}`,
        },
      });
    }

    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {


        if (error.status === 401) {
          this.handleUnauthorized();
        } else if (error.status === 403) {
          this.handleForbidden();
        }

        return throwError(() => error);
      })
    );
  }

  private handleUnauthorized(): void {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userRole');
    this.router.navigate(['/login']);
  }

  private handleForbidden(): void {
    this.router.navigate(['/']);
  }
}
