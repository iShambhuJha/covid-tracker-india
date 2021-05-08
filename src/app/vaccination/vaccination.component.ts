import { HttpHeaders, HttpParams } from "@angular/common/http";
import { Component, OnInit, ViewChild } from "@angular/core";
import { MatAccordion } from "@angular/material/expansion";
import { CovidAllData } from "../core/services/covid-all-data.service";

@Component({
  selector: "app-vaccination",
  templateUrl: "./vaccination.component.html",
  styleUrls: ["./vaccination.component.scss"],
})
export class VaccinationComponent implements OnInit {
  pinCode: any="110006";
  datePicker: any="08-05-2021";
  panelOpenState = false;
  slotDetails: any = [];
  slotForEighteenPlus: any = [];
  slotForFortyFivePlus: any = [];
  allData: any = [];
  constructor(private _CovidAllData: CovidAllData) {}

  ngOnInit(): void {
    this.getAllVaccinationSlotsForEighteenPlus();
  }
  // To get all vaccination data by pincode for 18+
  getAllVaccinationSlotsForEighteenPlus(): void {
    this.slotForEighteenPlus = [];
    this.slotForFortyFivePlus = [];
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "my-auth-token",
      }),
    };
    let params = new HttpParams();
    params = params.append("pincode", this.pinCode);
    params = params.append("date", this.datePicker);
    const headers = new HttpHeaders()
      .set("Accept", "*/*")
      .set(
        "User-Agent",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36"
      );

    const options = { params: params, headers: headers };
    this._CovidAllData.getVaccineSlots(params).subscribe((res) => {
      this.slotForEighteenPlus = res.centers;
      this.allData = res.centers;
      console.log(this.slotForEighteenPlus, "this.total");
      this.slotForEighteenPlus.map((data: any = []) => {
        data["sessions"].map((ele: any) => {
          if (ele.min_age_limit == 45) {
            const index = data["sessions"].indexOf(ele);
            data["sessions"].splice(index)
          }
        });
      });
      console.log(this.slotForEighteenPlus, "this.slotForEighteenPlus");
    });
  }
}
