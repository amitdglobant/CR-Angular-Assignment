import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
// import { Subscription } from 'rxjs'
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Output() emitData = new EventEmitter<string>();

  constructor(public dialog: MatDialog, public taskService: TaskService) {}

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
    //TO DO: Generate unique id
    this.taskService.setCard(data);
    // this.taskService.getCard().subscribe(result => {
    // });
  }

  updateRowData(data: any) { // TO DO: Remove any and create an Interface for task
    
  }
}
