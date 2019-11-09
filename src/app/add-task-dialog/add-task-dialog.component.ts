import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-task-dialog',
  templateUrl: './add-task-dialog.component.html',
  styleUrls: ['./add-task-dialog.component.css']
})
export class AddTaskDialogComponent implements OnInit {

  constructor(private dialogRef:MatDialogRef<AddTaskDialogComponent>,private fb: FormBuilder) { }

  form:FormGroup;
  title:string;
  description:string;
  ngOnInit() {
    this.createForm();
  }

  createForm(){
    this.form = this.fb.group({
      'title':['',Validators.required],
      'description':['',Validators.required]
    })
  }
  cancel(){
    this.dialogRef.close();
  }
  save(){
    this.dialogRef.close(this.form.value);
  }
}
