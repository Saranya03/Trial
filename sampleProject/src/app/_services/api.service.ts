import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = "http://localhost:8080";
  private getDataRoute = "/get-results";
  private getJudgeDataRoute = '/get-results-by-judge';

  constructor(private http: HttpClient) { }

  getLeaderboardData(): Observable<any>{
    return this.http.get(this.baseUrl + this.getDataRoute);
  }

  getJudgeData(id :number): Observable<any>{
    let options : any = {headers : this.getHeaders()};
    return this.http.get(this.baseUrl + this.getJudgeDataRoute + "?teamId=" + id, options);
  }

  postData(): Observable<any>{
    return this.http.post();
  }

  getHeaders(){
    return new HttpHeaders().set('X-Authorization','eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ4bGFicyIsInJvbGUiOiJyb2xlX2p1ZGdlIiwiZXhwIjoxNTM2OTA0NjgwfQ.vLbq4mCESwvIiaGL7zY9324hhMdUakM7S_kDb1NSR81GUaYhZWJUrLpz8ZYfmyAvYvWHqGMMvN4GAMiJygINAg');
  }
}
