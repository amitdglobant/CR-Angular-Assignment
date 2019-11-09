import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../shared/task.class' 
import { FormGroup, Validators, FormControl } from "@angular/forms"
import { TaskService } from '../../shared/task.service'

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent implements OnInit {

  @Input() task:Task;	

  taskForm : FormGroup;

  editTaskFlag=false;

  taskStatus = Task.statusList

  constructor(private taskService:TaskService) { }

  ngOnInit() {
  	this.taskForm = new FormGroup({
	    title: new FormControl(this.task.title, Validators.required),
	    description: new FormControl(this.task.description, Validators.required),
	    status: new FormControl(this.task.getStatus(), Validators.required),
	  });
  }

  showeditTask(){
  	this.editTaskFlag = true
  }

  editTask(){
  	this.editTaskFlag = false
  	if(this.taskForm.valid){

  		// let task = new Task(this.taskForm.get("title").value,this.taskForm.get("description").value)
  		// this.taskService.updateTask(task)
  	}
  }

  removeTask(){
  	this.taskService.removeTask(this.task.id)
  }

}
