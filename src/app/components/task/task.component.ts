import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  //@Output() emitData = new EventEmitter<string>();

  showHideAddEditTaskPanel: boolean;
  isTaskCreate: boolean;
  editTaskId: number;
  previousTskTy:string = '';

  constructor(public taskService: TaskService) {}

  ngOnInit() {
    this.taskService.emitData.subscribe(taskObj => {
      this.showHideAddEditTaskPanel = true;
      this.isTaskCreate = false;

      document.querySelector("#taskTitle").value = taskObj.title;
      document.querySelector("#taskType").value = taskObj.taskType;
      document.querySelector("#taskDescription").value = taskObj.description;
      this.editTaskId = taskObj.id;
    });
  }

  toggleTaskPanel() {
    this.editTaskId = 0;
    //alert('toggle called');
    this.showHideAddEditTaskPanel = !this.showHideAddEditTaskPanel;
    this.isTaskCreate = true;
  }

  saveTask(taskTitle, taskType, taskDesc) {
    if(this.isTaskCreate) {
      this.taskService.addTask(taskTitle.value, taskType.value, taskDesc.value);
      taskTitle.value = '';
      taskType.value = 'todo';
      taskDesc.value = '';
      alert('Task Saved Sccessfully');
    } else {
      this.taskService.addTask(taskTitle.value, taskType.value, taskDesc.value, this.editTaskId);
      taskTitle.value = '';
      taskType.value = 'todo';
      taskDesc.value = '';
      alert('Task Updated Sccessfully');
    }
  }

}
