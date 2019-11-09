import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Output() emitData = new EventEmitter<string>();
  public addTaskForm: FormGroup;
  tname: any;
  tdesc: any;
  radioOptions: any;
  tstatus: any = 1;
  constructor(private fb: FormBuilder, public dialog: MatDialog) {}

  ngOnInit() {
    this.radioOptions = '2'; 
    this.addTaskForm = this.fb.group({
      IdProof: null,
      taskname: [this.tname, [Validators.required, Validators.pattern('[a-zA-Z]+([a-zA-Z ]+)*')]],
      taskdesc: [this.tdesc, [Validators.required]],
      taskstatus: [this.tstatus],
    });
  }

  closePopup() {
    this.dialog.closeAll();
  }

  addTask() {
    console.log('add:', this.addTaskForm);
    this.markAsDirty(this.addTaskForm);
  }

  private markAsDirty(group: FormGroup): void {
    group.markAsDirty();
    for (const i in group.controls) {
      group.controls[i].markAsDirty();
    }
  }
}
