import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { io } from 'socket.io-client/build/index';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  socket: any;
  constructor(private http: HttpClient) {
    this.socket = io('ws://localhost:3000')
  }

  public fetchStockData(page) {
    return this.http.post('api/fetchsensexdata', { page })
  }

  public insertStockData(data) {
    this.socket.emit('dataAdded', data);
    // return this.http.post('api/addsensexdata', data);
  }

  public dataAddedEvent() {
    return new Observable(observer => {
      this.socket.on('newdataAdded', (data) => {
        console.log(data)
        observer.next(data);
      });
      return () => { this.socket.disconnect(); }
    })
  }
}
