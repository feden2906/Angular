import { Component, OnInit } from '@angular/core';
import {User} from "../../models/User";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../services";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  user: User;
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private userService: UserService) {
    this.user = this.router.getCurrentNavigation()?.extras.state as User;
    this.activatedRoute.params.subscribe(params => {
      this.userService.getUser(params.id).subscribe(value => this.user = value);
    })
  }

  ngOnInit(): void {
  }

}
