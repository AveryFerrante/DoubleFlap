import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatTrackerComponent } from './stat-tracker/stat-tracker.component';

const routes: Routes = [
  { path: '', component: StatTrackerComponent },
  { path: 'map-selector', loadChildren: () => import('./map-selector/map-selector.module').then(m => m.MapSelectorModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
