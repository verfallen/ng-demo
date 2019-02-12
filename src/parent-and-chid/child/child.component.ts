import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "child",
  templateUrl: "child.component.html"
})
export class ChildComponent implements OnInit {
  constructor() {}
  // private title: string = "子组件标题";
  ngOnInit() {}
  public onclick(): void {
    alert("子组件弹出");
  }
  public childFn(): void {
    console.log("子组件名字是：" + this.panelTitle);
  }

  @Input()
  public panelTitle: string;

  @Output()
  public follow = new EventEmitter();

  public emitAnEvent(event): void {
    this.follow.emit("follow");
  }
}
