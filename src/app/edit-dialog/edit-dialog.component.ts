import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {
data:any;
  constructor(@Inject(MAT_DIALOG_DATA) data,private dialogRef:MatDialogRef<EditDialogComponent>,private fb: FormBuilder) { 
    this.data=data;
  }
  form:FormGroup;
  title:string;
  description:string;
  ngOnInit() {
    this.createForm();
  }
  createForm(){
    this.form = this.fb.group({
      'title':[this.data['userData'].title,Validators.required],
      'description':[this.data['userData'].description,Validators.required]
    })
  }
  cancel(){
    this.dialogRef.close();
  }
  update(){
    this.form.valueChanges.subscribe(change=>{
      this.form = change;
    })
    this.dialogRef.close(this.form.value);
  }

}
