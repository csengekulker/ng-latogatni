import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditsComponent } from './credits/credits.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  { path: '', component: TableComponent },
  { path: 'credits', component: CreditsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
