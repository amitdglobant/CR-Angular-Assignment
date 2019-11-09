import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Output() emitData = new EventEmitter<string>();

  constructor(
    private router: Router
  ) {}

  ngOnInit() {}

  onAddNewTask() {
    this.router.navigate(['/new']);
  }
}
