import { Component, Input, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-stockdata',
  templateUrl: './stockdata.component.html',
  styleUrls: ['./stockdata.component.css']
})

export class StockdataComponent implements OnInit {

  @Input() sensexData: string;

  constructor(private date: DatePipe) { }

  ngOnInit() {
  }

}
