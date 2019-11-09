  import { Component, OnInit, Output, EventEmitter, Inject, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
export interface DialogData {
  id:number, heading: string, description:string;
}
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Output() emitData = new EventEmitter<string>();

  constructor(public dialog: MatDialog) {}
  id: number;
  heading: string;
  description: string;
  ngOnInit() {}
  addTask(): void {
    const dialogRef = this.dialog.open(AddTask, {
      width: '450px',
      data: {id: this.id, heading: this.heading, description: this.description}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.heading = result;
      console.log('The dialog was closed');
    });
  }
}
@Component({
  selector: 'app-addtask',
  templateUrl: 'addtask.component.html',
})
export class AddTask {

  constructor(
    public dialogRef: MatDialogRef<AddTask>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    }
    @Output() datatoemit = new EventEmitter<string>();

    dummydata: string = "Hi";

    sendData(data: string) {
      this.datatoemit.emit(data);
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
}