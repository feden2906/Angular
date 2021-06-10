import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";                              // TODO бібліотечні імпорти зверху, твої знизу, між ними пробіл

import { UserRoutingModule } from './user-routing.module';
import {UsersComponent} from "./components/users/users.component";                  // TODO додай index файл в components
import {UserComponent} from "./components/user/user.component";                     // TODO додай index файл в components
import {UserService} from "./services/user.service";                                // TODO додай index файл в services
import {UsersResolveService} from "./services/users.resolve.service";               // TODO додай index файл в services
import { UserPostsComponent } from './components/user-posts/user-posts.component';  // TODO додай index файл в components


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
