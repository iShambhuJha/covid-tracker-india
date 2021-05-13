import { Component, OnInit } from '@angular/core';
import { CovidAllData } from '../core/services/covid-all-data.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import * as d3 from 'd3';
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
  styleUrls: ['./dashboard.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('void', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
      state('*', style({ height: '*', visibility: 'visible' })),
      transition('void <=> *', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class DashboardComponent implements OnInit {
  stateWise=[];
  // displayedColumns: string[] = ['state', 'confirmed', 'active', 'recovered', 'deaths', 
  // 'tested', 'vaccinated', 'population'];
  displayedColumns: string[] = ['state', 'confirmed', 'active', 'recovered', 'deaths'];
  dataSource:any;
  constructor(private _CovidAllData:CovidAllData) { }

  isExpansionDetailRow = (index:any, row:any) => row.hasOwnProperty('detailRow');

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
