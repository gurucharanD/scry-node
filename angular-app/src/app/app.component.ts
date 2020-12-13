import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  stockData: any;
  socket: any;
  recordsCount: number;
  constructor(private appService: AppService) {

  }
  ngOnInit() {
    this.appService.fetchStockData(1).subscribe(data => {
      this.stockData = data['sensexdata'];
      this.recordsCount = data['recordsCount']
    })
  }
  dataAddedEvenHandler(event) {
    event.Date = Date.now();
    this.stockData.pop();
    this.stockData.unshift(event);
    // this.socket.emit('dataAdded', event);
    this.appService.insertStockData(event).subscribe(data => {
      console.log(data)
    })
  }

  pagination(event) {
    console.log(event)
    this.appService.fetchStockData(event.activePage).subscribe(data => {
      this.stockData = data['sensexdata'];
    })
  }
}
