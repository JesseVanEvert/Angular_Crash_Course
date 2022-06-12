import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Task} from '../../interfaces/Task'
import {faTimes} from '@fortawesome/free-solid-svg-icons'
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
  
  constructor(private taskService: TaskService) { 

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


}
