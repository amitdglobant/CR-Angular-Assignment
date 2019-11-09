import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddTaskComponent } from '../add-task/add-task.component';
import { TaskService } from 'src/app/services/task/task.service';

@Component({
  selector: 'app-task-panel',
  templateUrl: './task-panel.component.html',
  styleUrls: ['./task-panel.component.scss']
})
export class TaskPanelComponent implements OnInit {
  title: object = {
    todo: 'TO DO',
    inProgress: 'IN PROGRESS',
    done: 'DONE'
  };

  idCounter = 0;

  tasks:any;

  taskPanelList: string[];

  dialogRef: any;

  constructor(private dialog: MatDialog, taskService:TaskService) {
    this.tasks = taskService.getAllTasks();
    this.taskPanelList = Object.keys(this.tasks);
  }

  ngOnInit() {}

  getTaskData(event) {
    this.dialogRef = this.dialog.open(AddTaskComponent, {
      width: '250px',
      data: { closeHandler: this.closeDialog, dialogRef: this.dialogRef }
    });
  }

  closeDialog() {
    console.log('Close Dialog');
    this.dialogRef.closeDialog();
  }
}
