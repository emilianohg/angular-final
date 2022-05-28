import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AuthService } from '../../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UrlInterceptorService implements HttpInterceptor {
  constructor(
    private auth: AuthService,
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let dataModified : any = {
      url : `${environment.url_api}${req.url}`
    };

    if(this.auth.getToken()) {
      dataModified['headers'] = req.headers.set('Authorization', `Bearer ${this.auth.getToken()}`);
    }

    return next.handle(
      req.clone(dataModified)
    );
  }
}
