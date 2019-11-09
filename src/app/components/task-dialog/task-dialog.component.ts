import { Component, OnInit, Input, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-task-dialog',
    templateUrl: 'task-dialog.component.html',
    styleUrls: ['./task-dialog.component.scss']
})

export class TaskDialogComponent implements OnInit {

  @Input() task: any;

  public titleFormGroup: FormGroup;

  private actionName: string;
  private status: string;

  constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        private dialogRef: MatDialogRef<TaskDialogComponent>
    ) { }

  ngOnInit() {
    if(this.data) {
        this.actionName = this.data.actionName || 'Add'; //TO DO: create an enum for Actions['Add', 'Update', 'Delete']
        this.status = 'ToDo';
    }
    this.titleFormGroup = new FormGroup(
        {
          title: new FormControl('', [Validators.required, Validators.email]),
          description: new FormControl('', [Validators.required, Validators.email]),
        }
      );
  }

  get description() { return this.titleFormGroup.get('description'); }

  get title() { return this.titleFormGroup.get('title'); }

  onSubmit(){
    console.log(this.titleFormGroup.value);
    // TO DO: Validate the form and then allow to close
    this.close();
  }

  close() {
    this.dialogRef.close({
        actionName: this.actionName,
        data: this.titleFormGroup.value,
        status: this.status
    });
  }
}
