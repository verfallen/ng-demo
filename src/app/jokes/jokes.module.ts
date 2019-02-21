import { NgModule } from "@angular/core";

import { jokesRoutes } from "./jokes.routes";
import { JokesComponent } from "./jokes.component";
import { RouterModule } from "@angular/router";
import {} from "../home/home.component";

@NgModule({
  declarations: [JokesComponent],
  imports: [RouterModule.forChild(jokesRoutes)]
})
export class JokesModule {}
