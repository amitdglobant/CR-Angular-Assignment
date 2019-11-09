import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import { TaskServiceService } from '../task-service.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  addTaskForm: FormGroup;
  title: string;
  taskID: number;
  sampleDiscription: string;
  taskArray = [];
  constructor(
    private _formBuilder: FormBuilder,
    private taskServiceService : TaskServiceService,
    private dialogRef: MatDialogRef<AddTaskComponent>,
    @Inject(MAT_DIALOG_DATA) data)
    { }

  ngOnInit() {
    this.addTaskForm = this.createForm();
  }

  createForm(){
    return this._formBuilder.group({
      title: this.title,
      taskID: this.taskID,
      discription: this.sampleDiscription,
    })
  }
  addTask(){
    this.taskArray.push(this.addTaskForm.value)
    this.taskServiceService.setTask({addTaskValues: this.taskArray});
    
  }
  cancel(){
    this.dialogRef.close();
  }

}
