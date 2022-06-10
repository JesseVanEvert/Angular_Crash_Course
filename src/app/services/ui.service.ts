import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTask: boolean = false;
  private showEditSection: boolean = false;
  private subjectAddTask = new Subject<any>();
  private subjectEditTask = new Subject<any>();


  constructor() { }

  toggleAddTask(): void {
    this.showAddTask = !this.showAddTask;
    this.subjectAddTask.next(this.showAddTask)
  }

  toggleEditTask(){
    this.showEditSection = !this.showEditSection;
    this.subjectEditTask.next(this.showEditSection)
  }

  onToggleAddTask(): Observable<any> {
    return this.subjectAddTask.asObservable();
  }

  onToggleEditTask(): Observable<any> {
    return this.subjectEditTask.asObservable();
  }
}
