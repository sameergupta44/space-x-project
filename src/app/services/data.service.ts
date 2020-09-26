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
  private buildURL(config): string {
    let str = '';
    if (config.launch !== null) {
      str += '&launch_success=' + config.launch;
    }
    if (config.landing !== null) {
      str += '&land_success=' + config.landing;
    }
    if (config.year !== '') {
      str += '&launch_year=' + config.year;
    }
    return str;
  }
  getLaunchData(config): Observable<any> {
    console.log(this.buildURL(config));
    return this.http.get(this.HOST_NAME + '/v3/launches?limit=100' + this.buildURL(config));
  }

}
