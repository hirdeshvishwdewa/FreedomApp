import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  get(endPointURL: string): Observable<any> {
    return this.httpClient.get(endPointURL);
  }
  post(endPointURL: string, formData: any): Observable<any> {
    return this.httpClient.post(endPointURL, formData);
  }
  
}
