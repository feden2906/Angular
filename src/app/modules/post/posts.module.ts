import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {PostService} from "./services/post.service";
import {PostsResolveService} from "./services/posts.resolve.service";
import { CommentsComponent } from './components/comments/comments.component';
import {PostsComponent} from "./components/posts/posts.component";
import {PostComponent} from "./components/post/post.component";


@NgModule({
  declarations: [
    CommentsComponent,
    PostsComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    HttpClientModule
  ],
  providers: [
    PostService,
    PostsResolveService
  ]
})
export class PostsModule { }
