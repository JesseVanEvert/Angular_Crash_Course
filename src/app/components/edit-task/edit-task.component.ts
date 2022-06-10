import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';


@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  showEditSection: boolean = false;
  text: string;
  day: string;
  reminder: boolean = false;

  constructor() {}

  ngOnInit(): void {
  }


}
