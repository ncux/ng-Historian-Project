import { Component, OnInit } from '@angular/core';
import { ChartDataService } from '../chart-data.service';
import { QueryUrlBuilderService } from '../query-url-builder.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  tagsList = [];
  TimeStamps = [];
  ChartDataSuperArray = [];

  constructor(private queryUrlService: QueryUrlBuilderService, private chartData: ChartDataService) { }

  ngOnInit() {
    this.tagsList = this.queryUrlService.tagsListValues;
    console.log(this.tagsList);
    this.TimeStamps = this.chartData.ChartLabels;
    console.log(this.TimeStamps);
    this.ChartDataSuperArray = this.chartData.ChartDataSuperArray;
    console.log(this.ChartDataSuperArray);
  }

}
