import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  currentId: number;  

  constructor() {
    this.currentId = 100;
   }

  addOrUpdateTask(task:any) {
    if (!task.id) {
      task.id=this.currentId++;
      this.tasks.todo.push(task);
    } else {
      let t = this.tasks.todo.find(t => t.id === task.id);

      if (!t) {
        t = this.tasks.inProgress.find(t => t.id === task.id);
      }

      if (!t) {
        t = this.tasks.done.find(t => t.id === task.id);
      }

      if (t) {
        t.title = task.title;
        t.description = task.description;
      } 
    }
  }

  deleteTask(id:number) {
    console.log('Not implemented');
  }

  getAllTasks(){
    return this.tasks;
  }

  private tasks: any = {
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
}
