import { DeleteDialogComponent } from './../../delete-dialog/delete-dialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent implements OnInit {

  @Output() emitObj = new EventEmitter<string>();
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
}
