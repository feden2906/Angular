import { Injectable } from '@angular/core';
import {User} from "../models/User";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url: string = "https://jsonplaceholder.typicode.com/users";

  constructor(private httpClient: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.url);
  }
}
