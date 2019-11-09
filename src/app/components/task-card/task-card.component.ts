import { DeleteDialogComponent } from './../../delete-dialog/delete-dialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EditDialogComponent } from 'src/app/edit-dialog/edit-dialog.component';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent implements OnInit {

  @Output() emitObj = new EventEmitter<string>();
  @Output() update = new EventEmitter<string>();
  @Input() task: any;

  constructor(private dialog:MatDialog) { }

  ngOnInit() {
    console.log("task",this.task);
  }

  delete(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.height='200px';
    dialogConfig.width='200px';
    dialogConfig.data = {
      userData: this.task
    };
    const dialogRef = this.dialog.open(DeleteDialogComponent,dialogConfig);
    dialogRef.afterClosed().subscribe(data=>{
    this.emitObj.emit(data);
    });
  }
  edit(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.height='300px';
    dialogConfig.width='400px';
    dialogConfig.data = {
      userData: this.task
    };
    const dialogRef = this.dialog.open(EditDialogComponent,dialogConfig);
    dialogRef.afterClosed().subscribe(data=>{
    this.task.title = data.title;
    this.task.description = data.description;
    });
  }
}
