import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRoleManagementComponent } from './user-role-management/user-role-management.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'user-roles-management',
    pathMatch: 'full'
  },
  {
    path: 'user-roles-management',
    component: UserRoleManagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
