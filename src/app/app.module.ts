import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {UsersComponent, UserComponent, UserDetailsComponent, PostsComponent,
  PostComponent, PostDetailsComponent} from './components';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
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
