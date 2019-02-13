import { Component, OnInit } from "@angular/core";
import { EventBusService } from "../service/event-bus.service";

@Component({
  selector: "child-2",
  templateUrl: "child-2.component.html"
})
export class Child2Component implements OnInit {
  public events: Array<string> = [];
  constructor(public eventBusService: EventBusService) {}

  ngOnInit() {
    this.eventBusService.eventBus.subscribe(value => {
      this.events.push(value + " = " + new Date());
    });
  }

  public triggerEventBus(): void {
    this.eventBusService.eventBus.next("组件1 触发");
  }
}
