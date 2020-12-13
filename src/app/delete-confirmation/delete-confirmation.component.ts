import { Component, OnInit, Inject } from '@angular/core';
import { TaskService } from '../services/task/task.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-delete-confirmation',
  templateUrl: './delete-confirmation.component.html',
  styleUrls: ['./delete-confirmation.component.css']
})
export class DeleteConfirmationComponent implements OnInit {

  constructor(private taskService: TaskService, @Inject(MAT_DIALOG_DATA) public data: any) { }

  taskId: number;

  ngOnInit() {
    
  }

  delete() {
    this.taskService.deleteTask(this.data.task.id);
  }

}
