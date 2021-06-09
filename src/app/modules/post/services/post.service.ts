import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "../models/Post";
import {Comment} from "../models/Comment";

@Injectable({
  providedIn: 'root'
})
export class PostService {


  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private httpClient: HttpClient) {
  }

  getPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.url);
  }

  getPostsComments(id: number): Observable<Comment[]>{
    return this.httpClient.get<Comment[]>("https://jsonplaceholder.typicode.com/comments?postId=" + id);
  }
}


