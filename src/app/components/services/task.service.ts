import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  @Output() emitData = new EventEmitter<object>();

  idCounter = 6;

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

  constructor() { }

  getTasks() {
    return this.tasks;
  }

  deleteTask(taskId, taskType) {

    for ( let i=0; i < this.tasks[taskType].length; i++) {
      if(taskId == this.tasks[taskType][i].id) {
        this.tasks[taskType].splice(i,1);
        break;
      }
    }
  }

  addTask(taskTitle, taskType, taskDesc, tskId = 0, preTaskType = '') {
    // Edit
    if(tskId) {
     // Edit Task
     if(preTaskType != taskType) {
        this.deleteTask(tskId, preTaskType);
        this.tasks[taskType].push({id: tskId, title: taskTitle, description: taskDesc });
     } else {
      for ( let i=0; i < this.tasks[taskType].length; i++) {
        if(tskId == this.tasks[taskType][i].id) {
          this.tasks[taskType][i].title =  taskTitle;
          this.tasks[taskType][i].description = taskDesc;
          break;
        }
      }
     }
    } else {
      // Add Task
      this.tasks[taskType].push({ id: ++this.idCounter, title: taskTitle, description: taskDesc });
     }
  }

  editTask(taskObj) {
    this.emitData.emit(taskObj);
  }

}
