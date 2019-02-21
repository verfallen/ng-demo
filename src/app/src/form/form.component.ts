import { Component, OnInit } from "@angular/core";
import { RegisterModel } from "./model/register-model";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.styl"]
})
export class FormComponent implements OnInit {
  public regModel: RegisterModel = new RegisterModel();

  constructor() {}

  ngOnInit() {}
}
