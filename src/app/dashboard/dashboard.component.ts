import { Component, OnInit } from '@angular/core';
import { CovidAllData } from '../core/services/covid-all-data.service';
export interface StateOverview {
  state: string;
  confirmed: string;
  active: string;
  recovered: string;
  deceased:string;
  tested: string;
  vaccinated: string;
  population: string;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  stateWise=[];
  // displayedColumns: string[] = ['state', 'confirmed', 'active', 'recovered', 'deaths', 
  // 'tested', 'vaccinated', 'population'];
  displayedColumns: string[] = ['state', 'confirmed', 'active', 'recovered', 'deaths'];
  dataSource:any;
  constructor(private _CovidAllData:CovidAllData) { }

  ngOnInit(): void {
    this.getAllCovidData();
  }
  // To get all covid data
  getAllCovidData(): void {
    this._CovidAllData.getCovidData().subscribe(res=>{
     console.log(res,'cases_time_series')
     sessionStorage.setItem('allCovidData', JSON.stringify(res));
      this.stateWise = res.statewise;
      this.dataSource = this.stateWise;

    });
 }
}
