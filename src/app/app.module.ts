import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PostComponent, PostsComponent, UserComponent, UsersComponent, HomeComponent, UserDetailsComponent} from './components';
import {PostService, UserService} from "./services";
import {RouterModule} from "@angular/router";

const routes = [
  {path: "users/:id", component: UserDetailsComponent},
  {path: "users", component: UsersComponent},
  {path: "home", component: HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    PostsComponent,
    PostComponent,
    HomeComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UserService, PostService ],
  bootstrap: [AppComponent]
})

export class AppModule {

}
