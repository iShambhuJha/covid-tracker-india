import { HttpHeaders, HttpParams } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { CovidAllData } from "../core/services/covid-all-data.service";

@Component({
  selector: "app-vaccination",
  templateUrl: "./vaccination.component.html",
  styleUrls: ["./vaccination.component.scss"],
})
export class VaccinationComponent implements OnInit {
  pinCode: any;
  datePicker: any;
  constructor(private _CovidAllData: CovidAllData) {}

  ngOnInit(): void {}
  // To get all vaccination data by pincode
  getAllVaccinationSlots(): void {
    console.log('datePic',this.datePicker)
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "my-auth-token",
      }),
    };
    let params = new HttpParams();
    params = params.append("pincode", this.pinCode);
    params = params.append("date", "07-05-2021");
    const headers = new HttpHeaders().set("Accept", "*/*").set("User-Agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36");

    const options = { params: params, headers: headers };
    this._CovidAllData.getVaccineSlots(params).subscribe((res) => {});
  }
}
