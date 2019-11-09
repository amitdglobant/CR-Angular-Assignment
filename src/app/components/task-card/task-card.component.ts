import { Component, OnInit, Input } from '@angular/core';
import { AddTaskComponent } from '../add-task/add-task.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent implements OnInit {

  @Input() task: any;

  constructor(private matDialog: MatDialog) { }

  ngOnInit() {
    console.log(this.task, 'task card')
  }
  editdata(data, i){
    this.matDialog.open(AddTaskComponent,
      {
        width: '600px',
        maxWidth: '600px',
        data : data
      } 

    );
   }

  }


