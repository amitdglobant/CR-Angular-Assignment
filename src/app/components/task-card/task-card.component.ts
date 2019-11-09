import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent implements OnInit {

  @Input() task: any;
  @Output() delet_Task = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  deleteTask(idOfTask) {
    console.log(idOfTask);
    this.delet_Task.emit(idOfTask);
  }
}
