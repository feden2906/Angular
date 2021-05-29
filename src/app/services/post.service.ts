import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "../models/Post";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url: string = "https://jsonplaceholder.typicode.com/posts?userId=";

  constructor(private httpClient: HttpClient) {

  }

  getPosts(userId: number): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.url + userId);
  }
}
