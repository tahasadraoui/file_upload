import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as components from '@app/components';

const routes: Routes = [
  {path: 'upload', component: components.UploadDashboardComponent},
  {path: 'home', component: components.HomeComponent},
  // Fallback when no prior route is matched
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
