import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';


  constructor( ) {}

  ngOnInit() {
  }

  // getData() {
  //   this.dataGetter.getHistorianData().subscribe(historianData => {
  //     console.log(historianData['Data'][0].Samples);
  //
  //
  //
  //   });
  // }
}
