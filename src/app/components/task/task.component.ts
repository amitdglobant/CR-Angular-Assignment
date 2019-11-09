import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AddTaskComponent } from 'src/app/add-task/add-task.component';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { MessagingService } from 'src/app/services/messaging.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Output() emitData = new EventEmitter<string>();

  constructor(private dialog: MatDialog, public messaging: MessagingService) { }

  ngOnInit() { }

  openDialog() {

    const dialogConfig = new MatDialogConfig();

    // dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(AddTaskComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      this.messaging.addTask(result);
    });
  }
}
