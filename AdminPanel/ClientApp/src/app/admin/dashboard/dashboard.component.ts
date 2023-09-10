import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LocalStorageService } from '../../service/localstorage.service';
import { IntegrationService } from 'src/app/service/integration.service';
import { GraphComponent } from '../../_directives/graph/graph.component';
// import { ChartComponent } from 'ng-apexcharts';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle
} from "ng-apexcharts";
import { TotalSalesComponent } from './total-sales/total-sales.component';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit{
  
  public chartOptions: any;
  public allLocations: any = [];
  selectedUser: any;

  @ViewChild(GraphComponent) graph: any = GraphComponent;
  @ViewChild(TotalSalesComponent) totalSales: any = TotalSalesComponent;
  // chartOptions: any =  Partial<ChartOptions>;
  constructor(
    private ls: LocalStorageService, private integrations: IntegrationService) {


    this.chartOptions = {
      series:[44, 55, 41],
      chart: {
        width: 300,
        height: 250,
        type: "donut",
      },
      fill: {
        colors: ["#2E9C92", "#99C1BA", "#DBEAE1"]
      },
      dataLabels: {
        enabled: false
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: false,
            },
          },
        },
      },

      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom",
              show:false,
            }
          }
        }
      ],
      legend: {
        show: false
     }
    };
  }
  // @ViewChild("chart") chart: any = ChartComponent;


  ngOnInit() {
    var selectedLocation = this.ls.getSelectedLocation();
    console.log(selectedLocation);
    this.allLocations = this.ls.getLocation();
    console.log(this.allLocations);
  }

  // Location Dropdown

  updateLocation(event: any) {
    const target = event.target as HTMLSelectElement;
    console.log(target.value)
    let locationId = target.value
    let relevantLocation = this.allLocations.filter((location: any) => location.locationID == locationId)
    console.log("Relevant Location==", relevantLocation[0])
    this.ls.setSelectedLocation(relevantLocation[0]);

  }
  // dataIntegration() {
  //   this.integrations.readIntergraion(userid)
  //     .subscribe((response: any) => {
  //       console.log(response);
  //       if (response != null) {

  //       }
  //       else {
  //         // this.ts.showWarning("Warning", "No data to display!");
  //       }
  //       //  this.totalPages = Math.ceil(this.categories.length / this.itemsPerPage);
  //       // this.updateDisplayedItems();
  //     })
  // }
}


