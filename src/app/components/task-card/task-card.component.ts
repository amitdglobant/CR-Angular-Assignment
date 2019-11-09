import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from 'src/app/services/task/task.service';
import { MatDialog } from '@angular/material';
import { AddTaskComponent } from '../add-task/add-task.component';
import { DeleteConfirmationComponent } from 'src/app/delete-confirmation/delete-confirmation.component';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent implements OnInit {

  @Input() task: any;

  dialogRef: any;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  editTask() {
    this.dialogRef = this.dialog.open(AddTaskComponent, {
      width: '250px',
      data: { task: this.task }
    });

    console.log(this.task);
  }

  deleteTask() {
    this.dialogRef = this.dialog.open(DeleteConfirmationComponent, {
      width: '250px',
      data: { task: this.task }
    });
  }

}
