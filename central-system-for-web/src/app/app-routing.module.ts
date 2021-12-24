import { OrganizationComponent } from './views/organization/organization.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChargePointComponent } from './views/charge-point/charge-point.component';

const routes: Routes = [
  {
    path: 'organizations',
    component: OrganizationComponent,
  },
  {
    path: 'charge-points',
    component: ChargePointComponent,
  },
  {
    path: '',
    redirectTo: 'organizations',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
