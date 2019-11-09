import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from '../task-service.service';

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

  idCounter = 0;

  tasks: any = {
    todo: [
      {
        id: 1,
        title: 'Sample Task 1',
        description: 'Sample description of task. Can be longer.'
      },
      {
        id: 4,
        title: 'Sample Task 4',
        description: 'Sample description of task. Can be longer.'
      },
      {
        id: 6,
        title: 'Sample Task 6',
        description: 'Sample description of task. Can be longer.'
      },
      {
        id: 5,
        title: 'Sample Task 5',
        description: 'Sample description of task. Can be longer.'
      }
    ],
    inProgress: [
      {
        id: 2,
        title: 'Sample Task 2' ,
        description: 'Sample description of task. Can be longer.'
      }
    ],
    done: [
      {
        id: 3,
        title: 'Sample Task 3',
        description: 'Sample description of task. Can be longer.'
      }
    ]
  };

  taskPanelList: string[];
  getTask: any;
  taskData: any;

  constructor(private taskServiceService : TaskServiceService,) {
    this.taskPanelList = Object.keys(this.tasks);
  }

  ngOnInit() {
    this.taskServiceService.taskContent.subscribe(message => {
      if (this.taskServiceService.getTask()) {
        this.taskData = this.taskServiceService.getTask();
        this.taskData.forEach(element => {
          let mapArray = {
            id: element.taskID,
            title: element.title,
            description: element.discription
          }
          this.tasks['todo'].push(mapArray)
        });
      }
    });
  }

}
