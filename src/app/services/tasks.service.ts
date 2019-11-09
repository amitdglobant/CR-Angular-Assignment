import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class TaskListService {

    todoList: Array<any>;
    finalList: Array<any>;
    lastId: number;
    deleteIdArr: Array<any>;

    constructor(){}

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

    getTasks() {
        return this.tasks;
    }

    addTasks(data: any) {
        this.todoList = this.tasks.todo;
        this.lastId = this.todoList[this.todoList.length - 1].id;
        this.todoList.push({...data, id: this.lastId + 1 });
        this.tasks = { ...this.tasks, ...this.todoList};
    }

    updateTasks() {

    }

    deleteTask(id: number, status: string) {
        this.deleteIdArr = this.tasks[status].filter(task => task.id != id);
        this.tasks = {...this.deleteIdArr, ...this.tasks['inProgress'], ...this.tasks['done']}
    }
}