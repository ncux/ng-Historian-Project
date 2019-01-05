import { Component, OnInit } from '@angular/core';
import { ChartDataService } from '../../chart-data.service';
import { QueryUrlBuilderService } from '../../query-url-builder.service';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {

  constructor(private chartData: ChartDataService, private queryUrlService: QueryUrlBuilderService) { }

  tagsList = [];

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels = this.chartData.ChartLabels;
  public barChartType = 'bar';
  public barChartLegend = false;

  //  chartData must be an array of objects like    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'}

  public barChartData;

  ngOnInit() {
    this.barChartData = this.chartData.ChartDataObjectsArray;
    this.tagsList = this.queryUrlService.tagsListValues;
    console.log(this.tagsList);
  }

}
