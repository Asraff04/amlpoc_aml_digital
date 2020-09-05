import { Injectable, Type } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
var token = localStorage.getItem('token');
// var token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyNSIsImV4cCI6MTU5ODU0MjQ2MiwidXNlcklkIjoxMCwiaWF0IjoxNTk4NTI0NDYyfQ.eEkDlRwWuxX79P7U4K_ttGH44e6xrmd7uY4nRvi2OvD3gCSebNhGIHmMSiFUPR_lJWMMgU_-1HPxpKuY8lVf6g"
// console.log("jwt token..."+token);

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
constructor() { }
intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  
  var token = localStorage.getItem('token');
  console.log("jwt token>>>>>"+token);
request = request.clone({
setHeaders: {
Authorization: `Bearer ${token}`,
'Content-Type': 'application/json'
}
});
// const skipIntercept= request.headers.get(Authorization);
// if (skipIntercept){
// request = request.clone({
// headers: request.headers.delete('Authorization')
// })
//
// }
// {
//

// });
// }
return next.handle(request);
}
}
