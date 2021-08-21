import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import data from '../data.json';

export interface IUserRole {
  id: string,
  name: string,
  type: string,
  description: string,
  images: string[],
  editable: boolean,
  inactive: boolean,
  dateCreated: string,
  lastUpdate: string
}

@Injectable({
  providedIn: 'root'
})
export class UserRolesService {

  constructor() {}

  getUserRoles(): Observable<IUserRole[]> {
    return new Observable((observer) => {
      observer.next(data);
    });
  }

  getUserRoleById(id: string): Observable<IUserRole> {
    return new Observable((observer) => {
      const role = data.find(item => item.id === id);
      observer.next(role);
    });
  }

  postUserRole(userRole: IUserRole): Observable<boolean> {
    return new Observable((observer) => {
      data.push(userRole);
      observer.next(true);
    });
  }
}
