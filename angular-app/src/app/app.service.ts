import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) {

  }

  public fetchStockData(page) {
    return this.http.post('/api/fetchsensexdata', { page })
  }

  public insertStockData(data) {
    return this.http.post('/api/addsensexdata', data);
  }
}
