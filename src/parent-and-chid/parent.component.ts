import { Component, OnInit, ViewChild } from "@angular/core";
import { ChildComponent } from "./child/child.component";

@Component({
  selector: "parent",
  templateUrl: "parent.component.html"
})
export class ParentComponent implements OnInit {
  @ViewChild(ChildComponent)
  private childComponent: ChildComponent;
  constructor() {}

  ngOnInit() {}
}
