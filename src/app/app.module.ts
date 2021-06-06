import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {UsersComponent} from './components/users/users.component';
import {HttpClientModule} from "@angular/common/http";
import {UserComponent} from './components/user/user.component';
import {RouterModule, Routes} from "@angular/router";
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {PostsComponent} from './components/posts/posts.component';
import {PostComponent} from './components/post/post.component';
import {PostDetailsComponent} from './components/post-details/post-details.component';
import {UsersResolveService} from "./services/resolvers/users.resolve.service";
import {PostsResolveService} from "./services/resolvers/posts.resolve.service";

let routes: Routes = [
  {
    path: 'users', component: UsersComponent, resolve: {data: UsersResolveService},
    children: [
      {path: ':id', component: UserDetailsComponent}
    ]
  },

  {
    path: 'posts', component: PostsComponent, resolve: {data: PostsResolveService},
    children: [
      {path: ':id', component: PostDetailsComponent}
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    UserDetailsComponent,
    PostsComponent,
    PostComponent,
    PostDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
