import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    UserListComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    UserRoutingModule,
  ]
})
export class UserModule { }
