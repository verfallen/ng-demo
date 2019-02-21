import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ComponentRef,
  ComponentFactoryResolver
} from "@angular/core";
import { Child11Component } from "../child11/child11/child11.component";

@Component({
  selector: "dynamic",
  templateUrl: "./dynamic.component.html",
  styleUrls: ["./dynamic.component.styl"]
})
export class DynamicComponent implements OnInit {
  @ViewChild("dyncomp", { read: ViewContainerRef })
  dyncomp: ViewContainerRef;

  comp1: ComponentRef<Child11Component>;
  comp2: ComponentRef<Child11Component>;

  constructor(private resolver: ComponentFactoryResolver) {}

  ngOnInit() {}

  ngAfterContentInit() {
    const childComp = this.resolver.resolveComponentFactory(Child11Component);
    this.comp1 = this.dyncomp.createComponent(childComp);
    this.comp1.instance.title = "111";
    this.comp1.instance.btnClick.subscribe(param => {
      console.log("----->" + param);
    });
    this.comp2 = this.dyncomp.createComponent(childComp);
  }

  public destoryChild(): void {
    this.comp1.destroy();
    this.comp2.destroy();
  }
}
