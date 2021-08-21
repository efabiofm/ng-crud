import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRoleManagementComponent } from './user-role-management/user-role-management.component';
import { UserRoleFormComponent } from './user-role-form/user-role-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'user-roles-management',
    pathMatch: 'full'
  },
  {
    path: 'user-roles-management',
    component: UserRoleManagementComponent
  },
  {
    path: 'user-role-form',
    component: UserRoleFormComponent
  },
  {
    path: 'user-role-form/:id',
    component: UserRoleFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
