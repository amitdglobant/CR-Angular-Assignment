import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent implements OnInit {
data:any;
  constructor(@Inject(MAT_DIALOG_DATA) data, private dialogRef:MatDialogRef<DeleteDialogComponent>) {
    this.data=data;
  }

  ngOnInit() {
  }

  cancel(){
    this.dialogRef.close();
  }
  delete(){
    this.dialogRef.close(this.data);
  }

}
