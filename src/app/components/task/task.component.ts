import { AddTaskDialogComponent } from './../../add-task-dialog/add-task-dialog.component';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Output() emitData = new EventEmitter<string>();

  constructor(private dialog: MatDialog) {}

  ngOnInit() {}
  addTask(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.height='300px';
    dialogConfig.width='400px';
    const dialogRef = this.dialog.open(AddTaskDialogComponent,dialogConfig);
    dialogRef.afterClosed().subscribe(data=>{
      this.emitData.emit(data);
    });
  }
}
