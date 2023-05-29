import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { JwtService } from '../services/jwt.service';
import { Base64 } from 'js-base64';

@Injectable({ providedIn: 'root' })
export class HttpTokenInterceptor implements HttpInterceptor {
  constructor(private jwtService: JwtService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const headersConfig: any = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    const token = this.jwtService.getToken();
    // Format : {"validator": base64 of given key}
    // post Lost Item:     "f11935bf-844d-4874-aec3-4ab93cad7fa2"
    // search Lost Item:    validator: "e3513a3b-6ec5-4119-a736-d29b410499cb"
    // post Grievance:    validator: "b80d7f6f-4335-420b-a6cb-107a465f1d01"
    //sign up "389e0fba-128b-4e87-af77-fff2619258a9"
    //update grievance "7b630eec-c55d-4ac8-a55c-2ae04c4021b7"
    if (req.url.includes('/generalUserRegistration/'))
      headersConfig['validator'] = Base64.encode(
        '389e0fba-128b-4e87-af77-fff2619258a9'
      );
    if (req.url.includes('/postLostItem/'))
      headersConfig['validator'] = Base64.encode(
        'f11935bf-844d-4874-aec3-4ab93cad7fa2'
      );
    else if (req.url.includes('/searchLostItem/'))
      headersConfig['validator'] = Base64.encode(
        'e3513a3b-6ec5-4119-a736-d29b410499cb'
      );
    else if (req.url.includes('/postGrievance/'))
      headersConfig['validator'] = Base64.encode(
        'b80d7f6f-4335-420b-a6cb-107a465f1d01'
      );
    else if (req.url.includes('/updateGrievanceById/'))
      headersConfig['validator'] = Base64.encode(
        '7b630eec-c55d-4ac8-a55c-2ae04c4021b7'
      );

    if (token) {
      headersConfig['Authorization'] = `${token}`;
    }
    headersConfig['language'] =
      document.documentElement.lang == 'en-US' ? 'English' : 'Odia';
    const request = req.clone({ setHeaders: headersConfig });
    return next.handle(request);
  }
}
