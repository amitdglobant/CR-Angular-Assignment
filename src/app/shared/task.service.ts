import { Injectable } from "@angular/core";
import { Task } from "./task.class";
import { Observable, Subject } from "rxjs"


@Injectable()
export class TaskService {

  private taskList: Array<Task> = [];

  private onTaskChanges$ = new Subject<boolean>()
  onTaskChanges = this.onTaskChanges$.asObservable()

  constructor() {
  	
  	let data = localStorage.getItem("task-data")
  	
  	if(data)
  	{
  		let tList:[] = JSON.parse(data)
      tList.forEach( (d:Task)=>{
        this.taskList.push(new Task(d.title,d.description,d.id,d.status_id))
      })
    }

  }

  private updateStorage(){
    localStorage.setItem("task-data",JSON.stringify(this.taskList))
  }

  private getNewIndex():number
  {
    if(this.taskList.length == 0)
      return 0;
    return this.taskList[this.taskList.length-1].id+1
  }

  addTask(task:Task){
    task.id = this.getNewIndex()
    this.taskList.push(task);
    this.updateStorage()
    this.onTaskChanges$.next(true)

  }

  updateTask(id,task:Task){
    let index = this.taskList.findIndex(task => task.id == id)
    this.taskList[index].title = task.title
    this.taskList[index].description = task.description
    this.taskList[index].status_id = task.status_id
    this.updateStorage()
    this.onTaskChanges$.next(true)
  }

  removeTask(id){
    let index = this.taskList.findIndex(task => task.id == id)
    this.taskList.splice(index,1);
    this.updateStorage()
    this.onTaskChanges$.next(true)
  }

  getAllTasks(){
    return this.taskList;
  }



}
