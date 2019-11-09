import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-editmodal',
  templateUrl: './editmodal.component.html',
  styleUrls: ['./editmodal.component.css']
})
export class EditmodalComponent implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<any>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    console.log(this.data);
    this.form = this.fb.group({
      title: [this.data.title, Validators.required],
      id: [this.data.id, Validators.required],
      status: [this.data.status, Validators.required],
      description: [this.data.description, Validators.required]
    });

  }

  save() {
    this.dialogRef.close(this.form.value);
   // console.warn(this.form.value);
  }

  close() {
     this.dialogRef.close();
  }

}
