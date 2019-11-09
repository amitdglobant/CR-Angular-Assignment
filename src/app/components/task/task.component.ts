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

  taskForm: FormGroup = new FormGroup({
    title: new FormControl("", Validators.required),
    description: new FormControl("", Validators.required),
  });
  taskStatus = Task.statusList;

  addTask:boolean = true;
  constructor(private taskService:TaskService) {}

  ngOnInit() {}

  addNewTask(){
  	if(this.taskForm.valid){
  		let task = new Task(this.taskForm.get("title").value,this.taskForm.get("description").value)
  		this.taskService.addTask(task)
  	}
  }

  showAddTask(){

  }

  hideAddTask(){

  }
}
