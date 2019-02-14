import { HomeComponent } from "./src/home/home.component";
import { JokesComponent } from "./src/jokes/jokes.component";

export const appRoutes = [
  // { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "jokes",
    component: JokesComponent
  },
  {
    path: "**",
    component: HomeComponent
  }
];
