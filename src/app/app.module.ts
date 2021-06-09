import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {PostsComponent,
  PostComponent, AppComponent} from './components';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";

let routes: Routes = [
  {
    path: 'users', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule)
  },
  {
    path: 'posts', loadChildren: () => import('./modules/post/posts.module').then(m => m.PostsModule)
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent,
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
