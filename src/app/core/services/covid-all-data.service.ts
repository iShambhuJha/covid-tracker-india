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

  // TO FETCH ALL COVID DATa
  getCovidData(): Observable<any> {
    return this._DataClientService.get<any>(HttpUrls.GET_ALL_COVID_DATA);
  }

  // TO FETCH ALL COVID VACCINE SLOTS
  getVaccineSlots(params:any): Observable<any> {
    return this._DataClientService.get<any>(HttpUrls.GET_ALL_VACCINE_SLOTS,params);
  }

    // TO POST USER DETAILS TO FIREBASE
    submitUserDetails(userdata:any): Observable<any> {
      return this._DataClientService.post<any>(HttpUrls.POST_USER_DETAILS,userdata);
    }

    // TO FETCH ALL USER DATA
    getUserDetails(){
      return this._DataClientService.get<any>(HttpUrls.GET_USER_DETAILS);
    }
}
