import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersResolveService} from "./services/users.resolve.service";             // TODO додай index файл в services
import {UsersComponent} from "./components/users/users.component";                // TODO додай index файл в components
import {UserPostsComponent} from "./components/user-posts/user-posts.component";  // TODO додай index файл в components

const routes: Routes = [
  {path: '', component: UsersComponent,  resolve: {data: UsersResolveService}},
  {path: ':id/posts', component: UserPostsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
