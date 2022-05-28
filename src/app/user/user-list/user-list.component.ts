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
    this.getPage(1);
  }

  ngOnInit(): void {
  }

  getPage(page: number) {
    this.userService.getUsers(page).subscribe(res => {
      this.listUserPagination = res;
    });
  }

}
