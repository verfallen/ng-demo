import { Routes, RouterModule } from "@angular/router";
import { JokesComponent } from "./jokes.component";

export const jokesRoutes: Routes = [
  {
    path: "jokes",
    component: JokesComponent
  }
];
