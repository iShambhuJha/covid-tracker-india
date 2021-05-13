import { Component, OnInit } from '@angular/core';
import { CovidAllData } from '../core/services/covid-all-data.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import * as d3 from 'd3';
import {STATE_NAMES} from '../shared/constants'
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
  displayedColumns: string[] = ['state','confirmed','active', 'recovered', 'deceased','other','tested','vaccinated','population'];
  dataSource:any;
  constructor(private _CovidAllData:CovidAllData) { }

  isExpansionDetailRow = (index:any, row:any) => row.hasOwnProperty('detailRow');

  ngOnInit(): void {
    this.getAllCovidData();
  }
  // To get all covid data
  getAllCovidData(): void {
    let data=[];
    let total=[];
    let meta=[];
    this._CovidAllData.getCovidData().subscribe(res=>{
      data=res;
      for(let i in STATE_NAMES){
        var ind = Object.keys(STATE_NAMES).indexOf(i);
          total.push(data[i].total);
           meta.push(data[i].meta);
           total[ind]["state"]=STATE_NAMES[i];
           total[ind]["population"]=this.numDifferentiation(meta[ind]["population"]);
           total[ind]["rr"]=((total[ind]["recovered"]/total[ind]["confirmed"]))*100;
           if(total[ind].hasOwnProperty('other'))
           total[ind]["active"]=total[ind]["confirmed"]-(total[ind]["recovered"]+total[ind]["deceased"]+total[ind]["other"])
           else
           total[ind]["active"]=total[ind]["confirmed"]-(total[ind]["recovered"]+total[ind]["deceased"])
      }

     console.log(total,'cases_time_series')
      // this.stateWise = res.total;
      this.dataSource = total;

    });
 }
  numDifferentiation(value) {
  let val:any = Math.abs(value)
  if (val >= 10000000) {
    val = (val / 10000000).toFixed(2) + ' Cr';
  } else if (val >= 100000) {
    val = (val / 100000).toFixed(2) + ' Lac';
  }
  return val;
}
}
