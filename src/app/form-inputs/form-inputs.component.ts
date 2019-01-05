import { Component, OnInit } from '@angular/core';
import { TagsService } from '../tags-service.service';
import { NgForm } from '@angular/forms';
import { QueryUrlBuilderService } from '../query-url-builder.service';

@Component({
  selector: 'app-form-inputs',
  templateUrl: './form-inputs.component.html',
  styleUrls: ['./form-inputs.component.css']
})
export class FormInputsComponent implements OnInit {

  customInputs = {
    title: '',
  };

  tagsListArray: any[] = [];

  constructor(private tagsGetter: TagsService, private queryUrlService: QueryUrlBuilderService) { }

  ngOnInit() {
    this.getTags();
  }


  getTags() {
    this.tagsGetter.getAllTags();
    this.tagsListArray = this.tagsGetter.tagsArray;
  }


  plot(form: NgForm) {
    if (form.invalid) {
      return;
    }
    // console.log(form.value);
    // console.log(form.value.startDate);    checking individual inputs

    this.queryUrlService.tagsListValues = form.value.tagsList;
    this.queryUrlService.startDateValue = form.value.startDate;
    this.queryUrlService.startTimeValue = form.value.startTime;
    this.queryUrlService.endDateValue = form.value.endDate;
    this.queryUrlService.endTimeValue = form.value.endTime;
    this.queryUrlService.calcModeValue = form.value.calcMode;
    this.queryUrlService.countValue = form.value.count;
    this.queryUrlService.intervalValue = form.value.interval;

    this.queryUrlService.buildQueryUrl();
    (<HTMLElement>document.querySelector('#nav-container')).style.display = 'block';
  }


}
