import { Component, OnInit,ViewChild } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexFill,
  ApexTooltip,
  ApexXAxis,
  ApexLegend,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexYAxis
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  markers: any; //ApexMarkers;
  stroke: any; //ApexStroke;
  yaxis: ApexYAxis | ApexYAxis[];
  dataLabels: ApexDataLabels;
  title: ApexTitleSubtitle;
  legend: ApexLegend;
  fill: ApexFill;
  tooltip: ApexTooltip;
};
@Component({
  selector: 'app-multichart',
  templateUrl: './multichart.component.html',
  styleUrls: ['./multichart.component.scss']
})
export class MultichartComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Requested",
          type: "area",
          data: [200, 120, 95, 40, 190, 104, 437, 110, 35, 300, 220, 70]
        },
        
        {
          name: "Aquired",
          type: "area",
          data: [190, 140, 150, 190, 110, 95, 200, 270, 146, 290, 160, 250]
        },
        {
          name: "RTR Pending",
          type: "area",
          data: [150, 110, 160, 210, 250, 109, 400, 136, 249, 145, 310, 234]
        },
        {
          name: "Resume Sumitted",
          type: "area",
          data: [180, 150, 200, 150, 310, 411, 212, 310, 192, 149, 201, 194]
        }
      ],
      chart: {
        height: 500,
        type: "area",
        stacked: false
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: [1, 1, 4]
      },
      title: {
        text: "Multi Chart Demo",
        align: "left",
        offsetX: 110
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
      yaxis: [
        {
          axisTicks: {
            show: true
          },
          axisBorder: {
            show: true,
            color: "#008FFB"
          },
          labels: {
            style: {
              colors: "#008FFB"
            }
          },
          title: {
            text: "Requested",
            style: {
              color: "#008FFB"
            }
          },
          tooltip: {
            enabled: true
          }
        },
        {
          seriesName: "Aquired",
          axisTicks: {
            show: true
          },
          axisBorder: {
            show: true,
            color: "#00E396"
          },
          labels: {
            style: {
              colors: "#00E396"
            }
          },
          title: {
            text: "Aquired",
            style: {
              color: "#00E396"
            }
          }
        },
        {
          seriesName: "RTR Pending",
          opposite: true,
          axisTicks: {
            show: true
          },
          axisBorder: {
            show: true,
            color: "#FEB019"
          },
          labels: {
            style: {
              colors: "#FEB019"
            }
          },
          title: {
            text: "RTR Pending",
            style: {
              color: "#FEB019"
            }
          }
        },
        {
          seriesName: "Resume Submitted",
          opposite: true,
          axisTicks: {
            show: true
          },
          axisBorder: {
            show: true,
            color: "#FF4560"
          },
          labels: {
            style: {
              colors: "#FF4560"
            }
          },
          title: {
            text: "Resume Submitted",
            style: {
              color: "#FF4560"
            }
          }
        }
      ],
      tooltip: {
        fixed: {
          enabled: true,
          position: "topLeft", // topRight, topLeft, bottomRight, bottomLeft
          offsetY: 30,
          offsetX: 60
        }
      },
      legend: {
        horizontalAlign: "left",
        offsetX: 40
      }
    };
  }
  

  ngOnInit(): void {
  }

}
