import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {AppUser} from "../../common/app-user";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  user: AppUser | undefined;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authService.user.subscribe((res) => {
      this.user = res;
    })
  }

  isLogged(): boolean {
    return this.user !== undefined && this.user.name !== '';
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

}
