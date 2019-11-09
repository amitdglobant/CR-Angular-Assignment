import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../dialog.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  taskForm: FormGroup;
  @Output() emitData = new EventEmitter<any>();

  constructor(private dialog: MatDialog) { }

  ngOnInit() { }

  addNewTaskPopup() {
    this.openDialog();
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        message: 'Please fill task details.',
      }
    });

    dialogRef.afterClosed().subscribe((taskToBeAdded: any) => {
      if (taskToBeAdded) {
        console.log(taskToBeAdded);
        this.emitData.emit(taskToBeAdded);
      }
    });
  }
}
