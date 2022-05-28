import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../auth/services/user';
import { Pagination } from '../../shared/dtos/pagination';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  getUsers(page: number = 1): Observable<Pagination<User>> {
    return this.http.get<Pagination<User>>('/users', {params: { page }});
  }

}
