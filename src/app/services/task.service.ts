import { Injectable } from '@angular/core';
import { TasksComponent } from '../components/tasks/tasks.component';
import {Task} from '../interfaces/Task'
import {TASKS} from '../mock-tasks'

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks(): Task[]{
    return TASKS;
  }
}
