import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import {UsersComponent} from "./components/users/users.component";
import {UserComponent} from "./components/user/user.component";
import {UserService} from "./services/user.service";
import {UsersResolveService} from "./services/users.resolve.service";
import {HttpClientModule} from "@angular/common/http";
import { UserPostsComponent } from './components/user-posts/user-posts.component';


@NgModule({
  declarations: [UsersComponent, UserComponent, UserPostsComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    UsersResolveService
  ]
})
export class UserModule { }
