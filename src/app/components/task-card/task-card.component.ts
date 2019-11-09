import { Component, OnInit, Input, Output } from '@angular/core';
import { emit } from 'cluster';
import { EventEmitter } from 'events';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent implements OnInit {

  @Input() task: any;  
  @Output() OutputData = new EventEmitter;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }

  onCloseClick(task) {
    this.taskService.deletetask(task);
    alert('Task deleted successfully.');
    // this.OutputData.emit(task);
  }

  onDeleteClick(task) {
    this.taskService.deletetask(task);
    alert('Task deleted successfully.');
    // this.OutputData.emit(task);
  }

}
