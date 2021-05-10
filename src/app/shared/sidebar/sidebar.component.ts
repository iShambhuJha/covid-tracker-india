import { Component, OnInit } from '@angular/core';
import { CovidAllData } from 'src/app/core/services/covid-all-data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  casesStats:any;
  prevDayStats:any;
  dayStats:any;
  constructor(private _CovidAllData:CovidAllData) { }

  ngOnInit(): void {
    this.getAllCovidData()
  }
  // To get all covid data
  getAllCovidData(): void {
    this._CovidAllData.getCovidData().subscribe(res=>{
     console.table(res.cases_time_series);
      this.casesStats = res.statewise[0];
      this.dayStats = res.cases_time_series[res.cases_time_series.length-1];
      this.prevDayStats = res.cases_time_series[res.cases_time_series.length-2];
      console.log('casesstas',this.casesStats)
      console.log('this.prevDayStats', this.prevDayStats)
    });
 }
}
