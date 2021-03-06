import { Component, OnInit, Output, EventEmitter, Input, HostListener } from '@angular/core';
import { Task } from '../../interfaces/Task';
import { TaskService } from 'src/app/services/task.service';



@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  @Output() taskChange: EventEmitter<Task> = new EventEmitter();
  @Input() task: Task;
  showEditSection: boolean = false;
  text: string;
  day: string;
  id: number;
  reminder: boolean = false;

  constructor( private taskService: TaskService ) {}

  ngOnInit(): void { 
    this.text = this.task.text;
    this.day = this.task.day;
    this.id = this.task.id;
    this.reminder = this.task.reminder;
  }

  changeTask(): void{
    const newTask = {
      id: this.id,
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.taskChange.emit(newTask)
  }

  toggleEditTask(): void {
    this.showEditSection = !this.showEditSection;
  }

  updateReminder(task: Task): void {
    this.reminder = !this.reminder;
    this.changeTask()
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    this.changeTask()
  }
}
