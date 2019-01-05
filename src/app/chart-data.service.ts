import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChartDataService {

  headers = new HttpHeaders({
    'Authorization': `Bearer ${environment.access_token}`,
  });

  ChartLabels = [];   // holds TimeStamps
  ChartDataSuperArray = [];   // intermediary stage
  ChartDataObjectsArray = [];   // holds values for ChartData

  dataQueryUrl = '';
  staticData = 'assets/data/data.json';   // for development only

  constructor(private http: HttpClient) { }

  getDataAndSetChartValues() {
    return this.http.get(this.staticData).subscribe(historianData => {    // switch URL to dataQueryUrl when ready for production!
      const rawValuesArray = historianData['Data'];
      // getting the "Samples" arrays only from each of the data objects inside "Data"
      const timeAndValuesData = rawValuesArray.map(tagData => tagData['Samples']);

      timeAndValuesData.forEach(set => {
        const valuesArray = set.map(dataObject => dataObject['Value']);
        this.ChartDataSuperArray.push(valuesArray);

        // this reduce block converts the ChartDataSuperArray values into objects
        const dataObjects = this.ChartDataSuperArray.reduce((acc, elem) => {
          acc['data'] = elem;
          // acc[TAG_NAME] = something;   try this!
          return acc;
        }, {});

        this.ChartDataObjectsArray.push(dataObjects);
      });

      // these timestamps will be used for the chart labels
      const timeStampsArray = timeAndValuesData[0].map(set => set['TimeStamp']);
      this.ChartLabels = timeStampsArray.map(timestamp => timestamp.slice(0, 16));
    });

  }




}
