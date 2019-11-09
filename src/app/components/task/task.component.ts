import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Output() emitData = new EventEmitter<any>();
  public display: Boolean = false;
  public id: number;
  public title: any;
  public description: any;
  constructor() { }

  ngOnInit() { }


  addTask() {
    this.display = true;
  }

  saveTask() {
    const obj = {
      id: this.id,
      title: this.title,
      description: this.description
    }
    this.emitData.emit(obj);
  }

}
