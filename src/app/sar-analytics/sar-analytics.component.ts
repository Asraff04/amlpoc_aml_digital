import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sar-analytics',
  templateUrl: './sar-analytics.component.html',
  styleUrls: ['./sar-analytics.component.css']
})
export class SarAnalyticsComponent implements OnInit {

  public isISR: boolean =true;
  public isFSR: boolean =false;
  constructor() { }

  ngOnInit(): void {
  }

}
