import { Component, OnInit } from '@angular/core';

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
  maxId: number = 0;
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

  constructor() {
    this.taskPanelList = Object.keys(this.tasks);
    console.log(this.taskPanelList);
  }

  ngOnInit() { }
  getTaskData(value) {
    value['id'] = this.findMaxId() + 1;
    this.tasks.todo.push(value);
  }
  findMaxId() {
    this.taskPanelList.forEach(task=>{
    this.tasks[task].forEach(item => {
      this.maxId = Math.max(+item.id, this.maxId);
    })
  })
    return this.maxId;
  }
  deleteItem(item) {
    this.tasks.todo.forEach((i, index) => {
      if (i === item['userData']) {
        this.tasks.todo.splice(index, 1);
      }
    })
  }
}
