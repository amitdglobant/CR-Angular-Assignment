import { Component, OnInit, Output, Inject } from '@angular/core';
import { TaskService } from 'src/app/services/task/task.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  id: number;
  title: string;
  description: string;

  dialogRef: any;

  btnText: string;

  @Output() closeDialog:Function;

  constructor(private taskService: TaskService, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.btnText = this.data.task ? 'Update Task' : 'Add Task';

    if (this.data.task) {
      this.id = this.data.task.id;
      this.title = this.data.task.title;
      this.description = this.data.task.description;
    }
  }

  addTask() {
    this.taskService.addOrUpdateTask({
      id: this.id,
      title: this.title,
      description: this.description 
    });

    // this.dialogRef.closeDialog();
  }

  cancel() {
    console.log('cancel');
  }

}
