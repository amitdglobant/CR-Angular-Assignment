import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from "@angular/material";


@Component({
  selector: 'create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {
  @Output() emitData = new EventEmitter<string>();

  constructor(private formBuilder: FormBuilder, private dialog: MatDialog) {}

  public createTaskForm: FormGroup;
  public isSubmitted = false;

  ngOnInit() {
    this.createTaskForm  =  this.formBuilder.group({
      taskTitle: ['', Validators.required],
      taskDescription: ['', Validators.required]
    }); 
  }

  get formControls() { return this.createTaskForm.controls; }

 createTask(task) {
  this.isSubmitted = true;
  console.log(this.createTaskForm.value);
  if (this.createTaskForm.value !== null) {
    return;
  }
  this.dialog.closeAll();
 }
}