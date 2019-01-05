import { Component, OnInit } from '@angular/core';
import { ChartDataService } from '../../chart-data.service';
import {QueryUrlBuilderService} from '../../query-url-builder.service';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit {

  constructor(private chartData: ChartDataService, private queryUrlService: QueryUrlBuilderService) { }

  tagsList = [];

  public lineChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public lineChartLabels = this.chartData.ChartLabels;
  public lineChartType = 'line';
  public lineChartLegend = false;

  //  chartData must be an array of objects like    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'}

  public lineChartData;

  ngOnInit() {
    this.lineChartData = this.chartData.ChartDataObjectsArray;
    this.tagsList = this.queryUrlService.tagsListValues;
  }

}
