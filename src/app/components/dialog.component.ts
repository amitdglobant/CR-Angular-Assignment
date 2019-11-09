import { Component, OnInit, Inject } from '@angular/core';
import { VERSION, MatDialogRef, MatDialog, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-dialog-dialog',
    templateUrl: './dialog.component.html'
})
export class DialogComponent {
    message: string = ""
    taskForm: FormGroup;
    constructor(
        @Inject(MAT_DIALOG_DATA) private data: any,
        private dialogRef: MatDialogRef<DialogComponent>, private formBuilder: FormBuilder) {
        if (data) {
            this.message = data.message;
        }
        this.initializeForm();
    }

    initializeForm() {
        this.taskForm = this.formBuilder.group({
            title: [null, Validators.required],
            description: [null]
        });
    }

    addNewTask() {
        if (!this.taskForm.valid)
            return

        let dataToCreateTask = this.taskForm.value;
        this.dialogRef.close(dataToCreateTask);
    }
}