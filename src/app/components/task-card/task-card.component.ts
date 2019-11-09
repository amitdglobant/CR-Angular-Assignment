import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';
import { TaskManagerService } from 'src/app/services/task-manager.service';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent implements OnInit {

  @Input() task: any;
  @Input() taskGroup: string;
  title: string;
  description: string;
  isEditing: false;
  selectedValue: string;
  status =  [
    { value: 'todo', viewValue: 'TO DO'},
    { value: 'inProgress', viewValue: 'IN PROGRESS'},
    { value: 'done', viewValue: 'DONE'},
  ];

  constructor(
    private taskManagerService: TaskManagerService
  ) { }

  ngOnInit() {
    this.selectedValue = this.taskGroup;
  }

  updateTask() {
    this.isEditing  = false;
    this.taskManagerService.updateTask(this.task.id, this.title, this.description, this.selectedValue);
    // console.log(this.title, this.description)
  }

}
