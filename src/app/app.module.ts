import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { ParentComponent } from "../parent-and-chid/parent.component";
import { ChildComponent } from "../parent-and-chid/child/child.component";
import { Child1Component } from "../brothers/child-1/child-1.component";
import { Child2Component } from "../brothers/child-2/child-2.component";
import { EventBusService } from "../brothers/service/event-bus.service";
@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    Child1Component,
    Child2Component
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [EventBusService],
  bootstrap: [AppComponent]
})
export class AppModule {}
