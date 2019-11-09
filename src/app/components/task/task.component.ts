import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormControl } from "@angular/forms"
import { Task } from '../../shared/task.class'
import { TaskService } from '../../shared/task.service'




@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {


  taskStatus = Task.statusList;

  taskForm=new FormGroup({
      title: new FormControl("", Validators.required),
      description: new FormControl("", Validators.required),
    });;
  addTask:boolean = false;
  constructor(private taskService:TaskService) {}

  ngOnInit() {}

  addNewTask(){
  	if(this.taskForm.valid){
  		let task = new Task(this.taskForm.get("title").value,this.taskForm.get("description").value)
  		this.taskService.addTask(task)
  	}
  }

  showAddTask(){
    this.addTask = true
  }

  hideAddTask(){
    this.addTask = false
  }
}
