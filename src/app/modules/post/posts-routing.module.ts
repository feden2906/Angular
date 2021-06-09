import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostsComponent} from "../../components";
import {PostsResolveService} from "./services/posts.resolve.service";
import {CommentsComponent} from "./components/comments/comments.component";

const routes: Routes = [
  {path: '', component: PostsComponent, resolve: {data: PostsResolveService}},
  {path: ':id/comments', component: CommentsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
