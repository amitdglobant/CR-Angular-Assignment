import { Component, Inject, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Output() emitData = new EventEmitter<string>();

  private dialogRef: any; // TO DO: Add MatDialogRef as type

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  openDialog() {
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      data: {
        animal: 'panda'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.actionName === 'Add'){
        this.addRowData(result.data);
      }else if(result.event === 'Update'){
        this.updateRowData(result.data);
      }
      // else if(result.event == 'Delete'){
      //   this.deleteRowData(result.data);
      // }
    });
  }

  addRowData(data: any) { // TO DO: Remove any and create an Interface for task
    console.log("create task: ", data);
  }

  updateRowData(data: any) { // TO DO: Remove any and create an Interface for task
    
  }
}
