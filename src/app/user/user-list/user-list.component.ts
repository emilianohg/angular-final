import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Pagination } from '../../shared/dtos/pagination';
import { User } from '../../auth/services/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  listUserPagination : Pagination<User> | null;

  constructor(
    private userService: UserService,
  ) {
    this.listUserPagination = null;
    this.userService.getUsers().subscribe(res => {
      this.listUserPagination = res;
    })
  }

  ngOnInit(): void {
  }

}
