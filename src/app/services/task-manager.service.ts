import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskManagerService {
  tasksUpdated: EventEmitter<any> = new EventEmitter();

  idCounter = 100;

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
    console.log('Taskss', this.tasks);
    return this.tasks;
  }

  addNewTask({title, description}) {
    const task = {
      id: this.idCounter + 1,
      title,
      description
    };
    this.tasks.todo.push(task);
    this.idCounter++;
    this.tasksUpdated.emit(task);
  }

  updateTask(id, title, description, taskGroup) {
    let existingItem = this.tasks[taskGroup].findBy(id);
    console.log('title', existingItem);
  }

}
