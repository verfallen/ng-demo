import { Component, NgModule, ViewChild } from "@angular/core";
import { ParentComponent } from "../parent-and-chid/parent.component";
import { flyIn } from "../animation/fly-in";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.styl"],
  animations: [flyIn]
})
export class AppComponent {
  public isShow: boolean = true;
  public toggleShow(): void {
    this.isShow = !this.isShow;
  }
  public list: object = [1, 2, 3, 5, 6, 7, 7];
  public mapStatus: string = "0";
  public currentClasses: {};
  public canSave: boolean = true;
  public isUnchanged: boolean = true;
  public isSpecial: boolean = true;

  public setCurrentClasses(): void {
    this.currentClasses = {
      saveable: this.canSave,
      modified: this.isUnchanged,
      special: this.isSpecial
    };
  }

  public currentStyle: object = {};
  public setCurrentStyle(): void {
    this.currentStyle = {
      "font-style": this.canSave ? "italic" : "normal",
      "font-weight": !this.isUnchanged ? "bolder" : "normal",
      "font-size": this.isSpecial ? "36px" : "20px"
    };
  }

  public currentRace: object = { name: "ngModel 属性" };
  public currentTime: Date = new Date();

  @ViewChild(ParentComponent)
  private parentComponent: ParentComponent;
}
