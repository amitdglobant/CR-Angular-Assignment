import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<any>) { }

  ngOnInit() {
    this.form = this.fb.group({
      title: ['', Validators.required],
      id: ['', Validators.required],
      status: ['todo', Validators.required],
      description: ['', Validators.required]
    });

  }

  save() {
    this.dialogRef.close(this.form.value);
   // console.warn(this.form.value);
  }

  close() {
     this.dialogRef.close();
  }

}
