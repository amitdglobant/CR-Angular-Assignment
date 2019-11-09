import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-task",
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.scss"]
})
export class TaskComponent implements OnInit {
  @Output() emitData = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  onClick(): void {
    this.emitData.emit(`The ID should be added!`);
  }
}
