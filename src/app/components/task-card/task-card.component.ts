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
	    title: new FormControl(this.task.title, [ Validators.required , Validators.pattern("[a-z]*") ]),
	    description: new FormControl(this.task.description, Validators.required),
	    status: new FormControl(this.task.getStatusId(), Validators.required),
	  });
  }

  showeditTask(){
  	this.editTaskFlag = true
  }

  editTask(){
  	
  	if(this.taskForm.valid){
      this.task.title = this.taskForm.get("title").value
      this.task.description = this.taskForm.get("description").value
      this.task.setStatus(this.taskForm.get("status").value)
      this.taskService.updateTask(this.task.id,this.task)
  	}
    this.editTaskFlag = false
  }

  removeTask(){
  	this.taskService.removeTask(this.task.id)
  }

}
