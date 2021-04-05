import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService implements HttpInterceptor {

  constructor() { }
  handleError(error: HttpErrorResponse) {
    console.log("Lerror mte3na ",error.message ==="User not found");
    Swal.showValidationMessage(`Oupps!You Entred Invalid Credentiels`)
    
  if(error.message === "User Not found"){
    Swal.showValidationMessage(`user famech!`);
  } else 
    Swal.showValidationMessage(`invalid Credentials!`);
    return throwError(error);
  }
  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe(
        catchError(this.handleError)
      )
  };
}