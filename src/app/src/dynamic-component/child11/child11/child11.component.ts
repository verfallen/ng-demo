import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-child11",
  templateUrl: "./child11.component.html",
  styleUrls: ["./child11.component.styl"]
})
export class Child11Component implements OnInit {
  @Input()
  public title: string = "默认标题";

  @Output()
  btnClick: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  public triggerEvent(): void {
    this.btnClick.emit("第一个组件的点击事件");
  }
}
