import { Component, OnInit } from '@angular/core';
import { TaskManagerService } from 'src/app/services/task-manager.service';

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

  taskPanelList: string[];
  tasks: {}

  constructor(
    private taskManagerService: TaskManagerService
  ) {
    this.tasks = this.taskManagerService.getTasks();
    this.taskPanelList = Object.keys(this.tasks);
    // this.taskPanelList = Object.keys(this.tasks);
  }

  ngOnInit() {}
}
