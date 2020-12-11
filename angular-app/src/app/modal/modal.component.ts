import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Output() dataEvent = new EventEmitter<{
    Open: number;
    Close: number;
  }>();

  constructor() { }
  Open: number;
  Close: number;
  ngOnInit() {
  }

  display: boolean = false;

  showDialog() {
    this.display = true;
  }

  addData() {
    if (this.Open && this.Close) {
      this.dataEvent.emit({
        Open: Number(this.Open),
        Close: Number(this.Close)
      });
    }
    this.display = false;
  }



}
