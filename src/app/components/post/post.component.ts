import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../models/Post";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent{
  @Input()
  post: Post;
}
