import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  getEmployee(): Observable<any> {
    let url = 'https://hub.dummyapis.com/vj/CWmKH7p';
    return this.http.get(url);
  }
}
