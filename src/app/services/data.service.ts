import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private HOST_NAME = 'https://api.spaceXdata.com';

  constructor(private http: HttpClient) { }

  getInitialData(): Observable<any> {
    return this.http.get(this.HOST_NAME + '/v3/launches?limit=100');
  }

}
