import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material";
import { CreateTaskComponent } from '../create-task/create-task.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Output() emitData = new EventEmitter<string>();

  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  public openAddTaskDialogue() {
    const dialogConfig = new MatDialogConfig();

         this.dialog.open(CreateTaskComponent, dialogConfig);
  }
}
