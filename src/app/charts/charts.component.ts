import { Component, OnInit, ViewChild } from '@angular/core';


import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexStroke
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
};
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Requested",
          data: [200, 120, 95, 40, 190, 104, 437, 110, 35, 300, 220, 70]
        },
        {
          name: "Aquired",
          data: [190, 140, 150, 190, 110, 95, 200, 270, 146, 290, 160, 250]
        },
        {
          name: "RTR Pending",
          data: [150, 110, 160, 210, 250, 109, 400, 136, 249, 145, 310, 234]
        },
        {
          name: "Resume Submitted",
          data: [180, 150, 200, 150, 310, 411, 212, 310, 192, 149, 201, 194]
        }
      ],
      chart: {
        height: 350,
        type: "area"
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      xaxis: {
        categories: [
          "january",
          "february",
          "march",
          "april",
          "june",
          "july",
          "august",
          "september",
          "october",
          "november",
          "december"
        ]
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm"
        }
      }
    };
  }

  public generateData(baseval, count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

      series.push([x, y, z]);
      baseval += 86400000;
      i++;

      console.log(i);
    }
    return series;
  }
  ngOnInit(): void {
  }
}


  


