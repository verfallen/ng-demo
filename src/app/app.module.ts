import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { ParentComponent } from "../parent-and-chid/parent.component";
import { ChildComponent } from "../parent-and-chid/child/child.component";
import { Child1Component } from "../brothers/child-1/child-1.component";
import { Child2Component } from "../brothers/child-2/child-2.component";
import { EventBusService } from "../brothers/service/event-bus.service";
import { DynamicComponent } from "./src/dynamic-component/dynamic/dynamic.component";
import { Child11Component } from "./src/dynamic-component/child11/child11/child11.component";
import { DelayDirective } from "./src/direative/delay.directive";
import { HighlightComponent } from "./src/highlight/highlight.component";
import { appRoutes } from "./app.routes";
import { RouterModule } from "@angular/router";
import { FormComponent } from './src/form/form.component';
@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    Child1Component,
    Child2Component,
    DynamicComponent,
    Child11Component,
    DelayDirective,
    HighlightComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  providers: [EventBusService],
  bootstrap: [AppComponent],
  entryComponents: [Child11Component]
})
export class AppModule {}
