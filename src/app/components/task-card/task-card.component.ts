import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../shared/task.class' 

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent implements OnInit {

  @Input() task:Task;

  constructor() { }

  ngOnInit() {

  }

}
