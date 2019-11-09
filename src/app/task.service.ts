import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  task: any = {
    todo: [
      {
        id: 1,
        title: 'Sample Task 1',
        description: 'Sample description of task. Can be longer.',
        status: 0
      },
      {
        id: 4,
        title: 'Sample Task 4',
        description: 'Sample description of task. Can be longer.',
        status: 0
      },
      {
        id: 6,
        title: 'Sample Task 6',
        description: 'Sample description of task. Can be longer.',
        status: 0
      },
      {
        id: 5,
        title: 'Sample Task 5',
        description: 'Sample description of task. Can be longer.',
        status: 0
      }
    ],
    inProgress: [
      {
        id: 2,
        title: 'Sample Task 2' ,
        description: 'Sample description of task. Can be longer.',
        status: 1
      }
    ],
    done: [
      {
        id: 3,
        title: 'Sample Task 3',
        description: 'Sample description of task. Can be longer.',
        status: 2
      }
    ]
  }; 
  
  constructor() {
    localStorage.setItem('ls_tasks', btoa(this.task));
  }

  addtask(data) {
    // this.task = atob(localStorage.getItem('ls_tasks'));
    data.id = Math.random();
    this.task.todo.push(data)
    // localStorage.setItem('ls_tasks', btoa(this.task));
    console.log(this.task);
    return this.task;

  }
  
  deletetask(data) {
    // this.task = atob(localStorage.getItem('ls_tasks'));
    switch (data.status.toString()) {
      case '0': // todo
        for( var i = 0; i < this.task.todo.length; i++){ 
          if ( this.task.todo[i].id === data.id) {
            this.task.todo.splice(i, 1); 
          }
        }
        break;
      case '1': // inprogress
        for( var i = 0; i < this.task.inProgress.length; i++){ 
          if ( this.task.todo[i].id === data.id) {
            this.task.todo.splice(i, 1); 
          }
        }
        break;
      case '2': // done
        for( var i = 0; i < this.task.done.length; i++){ 
          if ( this.task.todo[i].id === data.id) {
            this.task.todo.splice(i, 1); 
          }
        }
        break;    
      default:
        break;
    }
    console.log(this.task);
    return this.task;
  }
}
