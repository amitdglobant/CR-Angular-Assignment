import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent implements OnInit {

  @Input() task: any;
  @Input() taskType: any;

  constructor(public taskService: TaskService) { }

  ngOnInit() {
  }

  deleteTask(taskId, taskType) {
    this.taskService.deleteTask(taskId, taskType);
  }

  editTask(taskObj, taskTy) {
    let tsk = {
      id: taskObj.id,
      title: taskObj.title,
      description: taskObj.description,
      taskType: taskTy
    }
    this.taskService.editTask(tsk);
  }
}
