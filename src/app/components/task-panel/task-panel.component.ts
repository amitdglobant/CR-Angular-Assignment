import { Component, OnInit } from '@angular/core';
import { Task } from '../../shared/task.class'
import { TaskService } from '../../shared/task.service'
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-task-panel',
  templateUrl: './task-panel.component.html',
  styleUrls: ['./task-panel.component.scss']
})
export class TaskPanelComponent implements OnInit {
  
  taskStatus : Array<any>

  filteredTask : any;

  constructor(private taskService:TaskService) {
   this.taskStatus = Task.statusList
   this.filteredTask = {}
  
  }

  ngOnInit() {
    this.taskService.onTaskChanges.subscribe( this.loadAllTasks.bind(this) )
    this.loadAllTasks()
  }

  loadAllTasks(){
    let tasks = this.taskService.getAllTasks()
    Task.statusList.forEach( (status)=>{
   
        this.filteredTask[status.id] = []
      
    })

    tasks.forEach( (task:Task)=>{
      console.log(task)
      this.filteredTask[task.getStatusId()].push(task)
    })
    console.log(this.filteredTask)
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

}
