import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AddTaskComponent } from '../add-task/add-task.component';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Output() emitData = new EventEmitter<string>();
  

  constructor(private matDialog: MatDialog) {}

  ngOnInit() {
    console.log(this.emitData, 'Emit Data')
  }

  addTask(){
    this.matDialog.open(AddTaskComponent,
      {
        width: '600px',
        maxWidth: '600px',
        data : 123
      } 

    );
   }
}
