import { Component, OnInit } from '@angular/core';
import { UserRolesService } from '../services/user-roles.service';
import { ActivatedRoute } from '@angular/router';
import { IUserRole } from '../services/user-roles.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-role-form',
  templateUrl: './user-role-form.component.html',
  styleUrls: ['./user-role-form.component.scss']
})
export class UserRoleFormComponent implements OnInit {
  role: IUserRole;
  roleForm: FormGroup = this.fb.group({
    name: [null, [Validators.required]],
    type: [null, [Validators.required]],
    description: [null, [Validators.required]]
  });
  submitted = false;

  constructor(
    private userRoleService: UserRolesService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.userRoleService.getUserRoleById(params.id).subscribe(role => {
          this.role = role;
        });
      }
    });
  }

  getFieldError(name: string) {
    const field = this.roleForm.get(name);
    return field?.invalid && this.submitted;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.roleForm.valid) {
      this.userRoleService.postUserRole(this.role);
    }
  }

}
