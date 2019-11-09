import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-new-task-card',
  templateUrl: './new-task-card.component.html',
  styleUrls: ['./new-task-card.component.css']
})
export class NewTaskCardComponent implements OnInit {
  newTaskForm: any;

  constructor(private formBuilder: FormBuilder,
    private taskService: TaskService) { }

  ngOnInit() {
    this.newTaskForm = this.formBuilder.group({      
      'Title': ['', [Validators.required,
      Validators.maxLength(10),
      Validators.minLength(2)
      ]],
      'Description': ['', [Validators.required,
      Validators.maxLength(10),
      Validators.minLength(2)
      ]]
    });
  }

  onAddTaskClick() {
    let reqObj: any = {};    
    reqObj.title = this.newTaskForm.value.Title,
    reqObj.description = this.newTaskForm.value.Description
    reqObj.status = 0;    
    this.taskService.addtask(reqObj);
    alert('New Task Added Successfully.');
    console.log(this.newTaskForm);
  }

}
