import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from 'chart.js';
import { formatDate } from '../core/util/format-date-util';
import * as moment from 'moment';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  items: any[] = [];
  currentDate = new Date();
  currentMonth = '';
  stopDate = new Date();
  selectedItem = null;

  ngOnInit() {
    // Creating an array with specified date range
    this.items = this.getDates(new Date('2023-05-20'), new Date('2023-06-30'));
  }

  // Common method to create an array of dates
  getDates(startDate: any, stopDate: any) {
    let dateArray = [];
    let currentDate = moment(startDate);
    stopDate = moment(stopDate);
    while (currentDate <= stopDate) {
      dateArray.push(moment(currentDate).format('YYYY-MM-DD'));
      currentDate = moment(currentDate).add(1, 'days');
    }
    return dateArray;
  }
  // getDates(startDate: any, stopDate: any) {
  //   let dateArray = [];
  //   while (startDate <= stopDate) {
  //     dateArray.push(formatDate(new Date(startDate)));
  //     let currentDate = new Date(startDate);
  //     currentDate.setDate(new Date().getDate() + 1);
  //   }
  //   return dateArray;
  // }
  // Get the selected Date
  select(item: any) {
    this.selectedItem = item;
    console.log(this.selectedItem);
  }

  // Method for changing Month
  changeMonth(e: any) {
    this.currentDate = this.items[e];
    this.currentMonth = new Date(this.currentDate).toLocaleString('default', {
      month: 'short',
    });
  }

  // Method to get the current weekday of the date showon
  returnWeekDay(item: any) {
    return new Date(item).toLocaleDateString('default', { weekday: 'short' });
  }
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  public pieChartLabels = ['Open', 'Attended'];
  public colors = ['#1234', '#12345'];

  public pieChartDatasets = [
    {
      data: [300, 500],
      backgroundColor: ['red', 'green'],
      hoverBackgroundColor: ['darkred', 'darkgreen'],
    },
  ];
  public pieChartLegend = true;
  public pieChartPlugins = [];
}
