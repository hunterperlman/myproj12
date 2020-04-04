import { Routes } from "@angular/router";

import { LibraryComponent } from "./catalog/catalog.component"
import { LoginComponent } from "./login/login.component"

const AppRoutes : Routes = 
[
  { path : "", redirectTo : "/login", pathMatch: 'full' },
  { path : "login", component : LoginComponent },
  { path : "library", component : LibraryComponent }
]

export {AppRoutes}
