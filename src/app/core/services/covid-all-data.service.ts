import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DataClientService } from "./data-client.service";
import { HttpUrls } from "../../shared/httpUrls";
import { HttpHeaders } from "@angular/common/http";
import { take } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class CovidAllData {
  constructor(private _DataClientService: DataClientService) {}

  // TO FETCH ALL Departments
  getCovidData(): Observable<any> {
    return this._DataClientService.get<any>(HttpUrls.GET_ALL_COVID_DATA);
  }
}