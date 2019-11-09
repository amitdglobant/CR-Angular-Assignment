import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  currentId: number;  

  constructor() {
    this.currentId = 100;
   }

  addTask(task:any) {
    task.id=this.currentId++;
    this.tasks.todo.push(task);
    console.log(this.tasks);
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
