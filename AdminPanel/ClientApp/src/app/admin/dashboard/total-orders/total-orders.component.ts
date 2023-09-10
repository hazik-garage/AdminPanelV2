import { Component, Input, OnInit, ViewChild } from '@angular/core';
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
  ApexPlotOptions,
  ApexYAxis
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  markers: any; //ApexMarkers;
  stroke: any; //ApexStroke;
  yaxis: ApexYAxis | ApexYAxis[];
  plotOptions: ApexPlotOptions;
  dataLabels: ApexDataLabels;
  colors: string[];
  labels: string[] | number[];
  title: ApexTitleSubtitle;
  subtitle: ApexTitleSubtitle;
  legend: ApexLegend;
  fill: ApexFill;
  tooltip: ApexTooltip;
};

declare global {
  interface Window {
    Apex: any;
  }
}

const sparkLineData = [80,15,40,5];

@Component({
  selector: 'app-total-orders',
  templateUrl: './total-orders.component.html',
  styleUrls: ['./total-orders.component.css']
})
export class TotalOrdersComponent implements OnInit {
  @ViewChild("chart") chart: any = ChartComponent;
  public chartAreaSparkline3Options: Partial<ChartOptions> | any;
  public commonAreaSparlineOptions: Partial<ChartOptions> | any = {
    chart: {
      type: "area",
      height: "80px",
      sparkline: {
        enabled: true
      }
    },
    colors:["#F04438"],
    stroke: {
      curve: "smooth",
    },
    fill: {
      type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.5,
          opacityTo: 0.3,
          stops: [0, 100]
        }
    },
    yaxis: {
      min: 0
    }
  };
  constructor() {
    window.Apex = {
      stroke: {
        width: 3
      },
      markers: {
        size: 0
      },
      tooltip: {
        fixed: {
          enabled: true
        }
      }
    };

    this.chartAreaSparkline3Options = {
      series: [
        {
          name: "Week",
          data: sparkLineData,
        }
      ],
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.3,
          opacityTo: 0.1,
          stops: [0, 100]
        }
      },
      // title: {
      //   text: "$135,965",
      //   offsetX: 0,
      //   style: {
      //     fontSize: "24px"
      //   }
      // },
      // subtitle: {
      //   text: "Profits",
      //   offsetX: 0,
      //   style: {
      //     fontSize: "14px"
      //   }
      // }
    };
   }

  ngOnInit(): void {
  }

}
