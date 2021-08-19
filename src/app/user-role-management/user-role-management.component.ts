import { Component, OnInit } from '@angular/core';
import { UserRolesService, IUserRole } from '../services/user-roles.service';

@Component({
  selector: 'app-user-role-management',
  templateUrl: './user-role-management.component.html',
  styleUrls: ['./user-role-management.component.scss']
})
export class UserRoleManagementComponent implements OnInit {
  userRoles: IUserRole[] = [];
  searchInput = '';
  statusInput = '';

  constructor(private userRoleService: UserRolesService) { }

  ngOnInit(): void {
    this.userRoleService.getUserRoles().subscribe((userRoles) => {
      this.userRoles = userRoles;
    });
  }
}
