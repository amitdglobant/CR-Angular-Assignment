import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { TaskManagerService } from 'src/app/services/task-manager.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewTaskComponent implements OnInit {
  taskForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private taskManagerService: TaskManagerService
  ) {
    this.taskForm = this.fb.group({
      title: '',
      description: ''
    })
  }
  ngOnInit() {}

  onSave() {
    this.taskManagerService.addNewTask(this.taskForm.value);
  }
}
