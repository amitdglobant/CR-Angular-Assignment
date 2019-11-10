import { Component, OnInit, Output, EventEmitter,Input } from '@angular/core';
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

  taskForm:FormGroup;

  @Input()
  task:Task;

  @Output()
  onCancel = new EventEmitter<any>();

  addTaskFlag:boolean = false;
  constructor(private taskService:TaskService) {}
  id:number;

  ngOnInit() {
    let title = "",status="",desc="";
    console.log("here12312")
    if(this.task)
    {  title = this.task.title
       desc = this.task.description
       status = this.task.getStatusId()
       this.id = this.task.id
       this.addTaskFlag = true
    }else{
      this.id = this.taskService.getNewIndex()
    }

    this.taskForm = new FormGroup({
      title: new FormControl(title, [ Validators.required , Validators.pattern("[^0-9]*") ]),
      description: new FormControl(desc, [ Validators.required ]  ),
      status: new FormControl(status),
    });;

  }

  addUpdateTask(){
  	if(this.taskForm.valid){
      if(this.task)
      {
        this.task.description = this.taskForm.get("description").value
        this.task.title = this.taskForm.get("title").value
        this.task.setStatus(this.taskForm.get("status").value)
        this.taskService.updateTask(this.task.id,this.task)
      }else{
          let task = new Task(this.taskForm.get("title").value,this.taskForm.get("description").value)
          this.taskService.addTask(task)
          this.id = this.taskService.getNewIndex()
          this.taskForm.reset()
      }
  	  this.hideAddTask()
  	}
  }

  showAddTask(){
    this.addTaskFlag = !this.addTaskFlag
  }

  hideAddTask(){
    this.addTaskFlag = false
    this.onCancel.emit()
  }
}
