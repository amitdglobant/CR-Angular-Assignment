import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { TaskListService } from '../../services/tasks.service';


export interface DialogData {
  title: string;
  description: string;
  status: string;
  id: number
}

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Output() emitData = new EventEmitter<string>();
  title: string;
  description: string;
  status: string;
  id: number;

  constructor(public dialog: MatDialog, private taskService: TaskListService) {}

  addTask(): void {
    const dialogRef = this.dialog.open(TaskModal, {
      width: '300px',
      data: {id: this.id, title: this.title, description: this.description, status: this.status}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.taskService.addTasks(result);
    });
  }

  ngOnInit() {}

}

@Component({
  selector: 'task-modal',
  templateUrl: 'task-modal.html',
})
export class TaskModal {

  constructor(
    public dialogRef: MatDialogRef<TaskModal>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
