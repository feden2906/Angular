import {Component} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {User} from "../../models/User";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {

  user: User;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private userService: UserService) {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.user = this.router.getCurrentNavigation()?.extras.state as User;
      const id = params.id;

      if (!this.user) {
        this.userService.getUser(id).subscribe(value => this.user = value)
      }
    })
  }
}
