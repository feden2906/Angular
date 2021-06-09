import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersResolveService} from "./services/users.resolve.service";
import {UsersComponent} from "./components/users/users.component";
import {UserPostsComponent} from "./components/user-posts/user-posts.component";

const routes: Routes = [
  {path: '', component: UsersComponent,  resolve: {data: UsersResolveService}},
  {path: ':id/posts', component: UserPostsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
