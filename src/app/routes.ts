import { Routes } from "@angular/router";

import { LibraryComponent } from "./library/library.component"
import { LoginComponent } from "./login/login.component"

const AppRoutes : Routes = 
[
  { path : "", redirectTo : "/login", pathMatch: 'full' },
  { path : "login", component : LoginComponent },
  { path : "library", component : LibraryComponent }
]

export {AppRoutes}
