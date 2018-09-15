import { Injectable } from '@angular/core';
import { Http , Response, BaseRequestOptions,Headers,RequestOptions, } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl: string = '';
  mediaTypeHeader = new BaseRequestOptions();
  mediaTypeDeleteHeader = new BaseRequestOptions();
  bearerToken;

  constructor(private http: Http) { }

  tryapi():Observable<any>{
    return this.http.get('https://api.hsbc.xlabs.solutions/org/?info=PORTAL&is_active=1&org_domain=gmail.com');
  }

  getOrganizationByDomain(domainName: string, isActive: string, orgName: string): Observable < any > {
      
    this.mediaTypeHeader = new RequestOptions({headers: new Headers(), withCredentials: true});
    this.mediaTypeHeader.headers.append('Content-Type', 'application/json');
     let url;
     if (isActive == null) {
       url = this.baseUrl + "/?info=PORTAL";
     } else {
       url = this.baseUrl + "/?info=PORTAL&is_active=1"
     }
     if (orgName != null) {
       url = url + "&org_name=" + orgName
     }
     let organization$ = this.http
       .get(`${url}&org_domain=${domainName}`, this.mediaTypeHeader)
       .map(mapOrganizations)
       .catch(handleError);
     return organization$;
   }
}
