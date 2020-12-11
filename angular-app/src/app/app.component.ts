import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(private appService: AppService) {

  }
  ngOnInit() {
    this.appService.fetchStockData(1).subscribe(data => {
      console.log(data);
    })
  }
}
