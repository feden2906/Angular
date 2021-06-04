import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../models/User";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  @Input()
  user: User;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  getUser(): void{
    this.router.navigate([this.user.id], {relativeTo: this.activatedRoute, state: this.user});
  }
}
