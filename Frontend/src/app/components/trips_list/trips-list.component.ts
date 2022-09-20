import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {AppUser} from "../../common/app-user";
import {TaskService} from "../../services/task.service";
import {AppTask} from "../../common/app-task";
import {Router} from "@angular/router";

@Component({
  selector: 'app-trips_list',
  templateUrl: './trips-list.component.html',
  styleUrls: ['./trips-list.component.css']
})
export class tripsListComponent implements OnInit {

  currentUser: AppUser | undefined;
  tasks!: AppTask[];

  constructor(private authService: AuthService, private taskService: TaskService, private router: Router) { }

  ngOnInit(): void {
    this.authService.user.subscribe((user) => {
      if (user === undefined) {
        this.router.navigateByUrl('login')
        return
      }
      this.currentUser = user;
      this.taskService.getTasks().subscribe((tasks) => {
        this.tasks = tasks;
      });
    })
  }

}
