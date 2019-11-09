import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task-panel',
  templateUrl: './task-panel.component.html',
  styleUrls: ['./task-panel.component.scss']
})
export class TaskPanelComponent implements OnInit {
  title: object = {
    todo: 'TO DO',
    inProgress: 'IN PROGRESS',
    done: 'DONE'
  };
  tasks = [];
  taskPanelList: string[];

  constructor(public taskService: TaskService) {
  }

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
    this.taskPanelList = Object.keys(this.tasks);
  }
}
