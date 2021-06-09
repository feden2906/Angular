import { Component } from '@angular/core';
import {UserService} from "../../services/user.service";
import {Post} from "../../../post/models/Post";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss']
})
export class UserPostsComponent {

  public posts: Post[];

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      const id = params.id;
      this.userService.getUserPosts(id).subscribe(value => this.posts = value);
    })
  }
}
