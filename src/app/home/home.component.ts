import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor() {}
  public pieChartLabels: string[] = [
    'Chrome',
    'Safari',
    'Firefox',
    'Internet Explorer',
    'Other',
  ];
  public pieChartData: number[] = [40, 20, 20, 10, 10];
  public pieChartType: string = 'pie';

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}
