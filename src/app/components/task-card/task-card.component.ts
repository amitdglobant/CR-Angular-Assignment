import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../shared/task.class' 
import { FormGroup, Validators, FormControl } from "@angular/forms"
import { TaskService } from '../../shared/task.service'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent implements OnInit {

  @Input() task:Task = null;	

  editTaskFlag=false;

  constructor(private taskService:TaskService,private dialog: MatDialog) { }

  ngOnInit() {
  	
  }

  showeditTask(){
  	this.editTaskFlag = true
  }

  hideEditTask(){
    this.editTaskFlag = false
  }

  removeTask(){


    const dialogRef = this.dialog.open(ConfirmationDialog, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
         
         if(result == true){
             this.taskService.removeTask(this.task.id)
         }
        
    });
  }
}


@Component({
  selector: 'confirmation-dialog',
  templateUrl: 'confirmation-dialog.html',
})
export class ConfirmationDialog {

  constructor( public dialogRef: MatDialogRef<ConfirmationDialog>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}