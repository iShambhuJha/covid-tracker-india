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

const ELEMENT_DATA: StateOverview[] = [
  {state: 'Delhi', confirmed: '12,34,345', active: '02,23,121', recovered: '10,23,232', deceased:'2311', tested: '21,23,212', vaccinated: '11,23,190', population: '12,23,32,123'},
  {state: 'west Bengal', confirmed: '45,67,543', active: '05,43,213', recovered: '11,23,212', deceased:'2311', tested: '21,23,212', vaccinated: '11,23,190', population: '12,23,32,123'},
  {state: 'Delhi', confirmed: '12,34,345', active: '02,23,121', recovered: '10,23,232', deceased:'2311', tested: '21,23,212', vaccinated: '11,23,190', population: '12,23,32,123'},
  {state: 'west Bengal', confirmed: '45,67,543', active: '05,43,213', recovered: '11,23,212', deceased:'2311', tested: '21,23,212', vaccinated: '11,23,190', population: '12,23,32,123'},
  {state: 'Delhi', confirmed: '12,34,345', active: '02,23,121', recovered: '10,23,232', deceased:'2311', tested: '21,23,212', vaccinated: '11,23,190', population: '12,23,32,123'},
  {state: 'west Bengal', confirmed: '45,67,543', active: '05,43,213', recovered: '11,23,212', deceased:'2311', tested: '21,23,212', vaccinated: '11,23,190', population: '12,23,32,123'},
  {state: 'Delhi', confirmed: '12,34,345', active: '02,23,121', recovered: '10,23,232', deceased:'2311', tested: '21,23,212', vaccinated: '11,23,190', population: '12,23,32,123'},
  {state: 'west Bengal', confirmed: '45,67,543', active: '05,43,213', recovered: '11,23,212', deceased:'2311', tested: '21,23,212', vaccinated: '11,23,190', population: '12,23,32,123'},
  {state: 'Delhi', confirmed: '12,34,345', active: '02,23,121', recovered: '10,23,232', deceased:'2311', tested: '21,23,212', vaccinated: '11,23,190', population: '12,23,32,123'},
  {state: 'west Bengal', confirmed: '45,67,543', active: '05,43,213', recovered: '11,23,212', deceased:'2311', tested: '21,23,212', vaccinated: '11,23,190', population: '12,23,32,123'},
  
];
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
  // dataSource = ELEMENT_DATA;
  dataSource:any;
  constructor(private _CovidAllData:CovidAllData) { }

  ngOnInit(): void {
    this.getAllCovidData();
  }
  // To get all covid data
  getAllCovidData(): void {
    this._CovidAllData.getCovidData().subscribe(res=>{
     console.table(res.statewise)
      this.stateWise = res.statewise;
      this.dataSource = this.stateWise;

    });
 }
}
