import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AppTask} from "../common/app-task";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private httpClient: HttpClient) { }

  getTasks(): Observable<AppTask[]> {
    return this.httpClient.get('http://localhost:8080/api/tasks') as Observable<AppTask[]>;
  }

}
