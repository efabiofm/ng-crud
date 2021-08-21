import { Component, Input, OnInit } from '@angular/core';
import { IUserRole } from '../services/user-roles.service';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-role-item',
  templateUrl: './user-role-item.component.html',
  styleUrls: ['./user-role-item.component.scss']
})
export class UserRoleItemComponent implements OnInit {
  @Input() item: IUserRole = {} as IUserRole;

  faLock = faLock;
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  editRole(id: string): void {
    this.router.navigate(['user-role-form', id]);
  }

}
