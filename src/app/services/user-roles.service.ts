import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import data from '../data.json';

export interface IUserRole {
  id: String,
  name: String,
  type: String,
  description: String,
  images: String[],
  editable: Boolean,
  inactive: Boolean,
  dateCreated: String,
  lastUpdate: String
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
}
