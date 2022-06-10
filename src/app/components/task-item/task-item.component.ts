import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Task} from '../../interfaces/Task'
import {faTimes} from '@fortawesome/free-solid-svg-icons'
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})

export class TaskItemComponent implements OnInit {
  @Input() task: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
  @Output() onEditTask: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;
  showEditSection: boolean = false;
  subscriptionEditTask: Subscription;
  
  constructor(private uiService: UiService, private taskService: TaskService) { 
    this.subscriptionEditTask = this.uiService
      .onToggleEditTask()
      .subscribe((value) => (this.showEditSection = value))
  }

  ngOnInit(): void {
  }


  onDelete(task){
    this.onDeleteTask.emit(task);
  }

  onToggle(task){
    this.onToggleReminder.emit(task);
  }

  editTask(task: Task, id: number){
    this.taskService.updateTask(task, id).subscribe();
  }

  toggleEditTask(): void {
    this.uiService.toggleEditTask();
  }
}
