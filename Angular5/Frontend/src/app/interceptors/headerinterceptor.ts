import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';  
import 'rxjs/add/operator/do';  

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        req = req.clone({
            withCredentials: true
          });

        console.log("intercepted request");
        console.log(req);
        console.log(next);
      
        return next.handle(req);

//         return next
//       .handle(req)
//       .do(event => {
//         if (event instanceof HttpResponse) {}
//       }, (error: any) => {
//         if (error instanceof HttpErrorResponse) {
//           if (error.status === 401) {
//             this.router.navigate(['/login']);
//           }
//         }
//       });
//   }
    }
}