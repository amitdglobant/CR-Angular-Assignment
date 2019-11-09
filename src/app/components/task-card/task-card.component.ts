import { Component, OnInit, Input } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { MessagingService } from 'src/app/services/messaging.service';
import { EditmodalComponent } from 'src/app/editmodal/editmodal.component';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent implements OnInit {

  @Input() task: any;
  @Input() status: any;

  constructor(private dialog: MatDialog, public messaging: MessagingService) { }

  ngOnInit() {
  }

  editTask(data) {
    const dialogConfig = new MatDialogConfig();

    // dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = data;

    const dialogRef = this.dialog.open(EditmodalComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      this.messaging.editTask(result);
    });
  }

  delete(data) {
    this.messaging.deleteTask(data);
  }

}
