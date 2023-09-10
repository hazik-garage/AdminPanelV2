import { Component, OnInit, ViewChild } from '@angular/core';
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

const analyticsData = [600,610,600,640,660,700,720,720,780,790,790,800];
@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  @ViewChild("chart") chart: any = ChartComponent;
  public chartAreaAnalytics: Partial<ChartOptions> | any;
  
  constructor() { 
    this.chartAreaAnalytics = {
      series: [
        {
          data: analyticsData
        }
      ],
      chart: {
        height: 245,
        type: "area",
        zoom: {
          enabled: false
        }
      },
      colors:[
       "#00897C"
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
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      title: {
        align: "left"
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.1
        }
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ],
        title: {
          text: "Months",
          style: {
            fontSize:  '13px',
            fontWeight:  500,
            fontFamily:  'Inter',
            color:  '#141414'
          }
        }
      },
      yaxis:{
        title: {
          text: "Net Sales",
          style: {
            fontSize:  '13px',
            fontWeight:  500,
            fontFamily:  'Inter',
            color:  '#141414'
          },
        }
      }
      };
  }
  ngOnInit(): void {
  }

  };

