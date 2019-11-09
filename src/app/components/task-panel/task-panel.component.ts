import { Component, OnInit } from '@angular/core';
import { MessagingService } from 'src/app/services/messaging.service';

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
        title: 'Sample Task 2',
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

  constructor(public messaging: MessagingService) {
    this.taskPanelList = Object.keys(this.tasks);
  }

  ngOnInit() {
    // get IDs of all tasks.


    this.messaging.getTask().subscribe((res: any) => {
      const todo_ids = this.tasks.todo.map(data => data.id);
      const inprogress_ids = this.tasks.inProgress.map(data => data.id);
      const done_ids = this.tasks.done.map(data => data.id);
      const id = [...todo_ids, ...inprogress_ids, ...done_ids];
      if (id.indexOf(res.id) !== -1) {
        alert('ID already exist');
        return;
      }
      switch (res.status) {
        case 'todo':
          this.tasks.todo = [... this.tasks.todo, {
            id: res.id,
            title: res.title,
            description: res.description
          }];
          break;
        case 'inprogress':
          this.tasks.inProgress = [... this.tasks.inProgress, {
            id: res.id,
            title: res.title,
            description: res.description
          }];
          break;

        case 'done':
          this.tasks.done = [... this.tasks.done, {
            id: res.id,
            title: res.title,
            description: res.description
          }];
          break;


        default:
          break;
      }
    });

    this.messaging.getEditedTask().subscribe((res: any) => {
      console.log(res);
      this.tasks.todo = this.tasks.todo.filter((item) => {
        return item.id !== res.id;
      });

      this.tasks.inProgress = this.tasks.inProgress.filter((item) => {
        return item.id !== res.id;
      });

      this.tasks.done = this.tasks.done.filter((item) => {
        return item.id !== res.id;
      });
      this.tasks[res.status] = [...this.tasks[res.status], {
        id: res.id,
        title: res.title,
        description: res.description
      }];
    });

    this.messaging.getDeletedTask().subscribe((res: any) => {
      console.log(res);
      const alltaskts = [...this.tasks.todo, ...this.tasks.inProgress, ...this.tasks.done];
      for (let i = 0; i < this.tasks.todo.length; i++) {
        if (this.tasks.todo[i].id === res.id) {
          this.tasks.todo.splice(i, 1);
          break;
        }
      }



      for (let i = 0; i < this.tasks.inProgress.length; i++) {
        if (this.tasks.inProgress[i].id === res.id) {
          this.tasks.inProgress.splice(i, 1);
          break;
        }
      }

      for (let i = 0; i < this.tasks.done.length; i++) {
        if (this.tasks.done[i].id === res.id) {
          this.tasks.done.splice(i, 1);
          break;
        }
      }
    });
  }
}
