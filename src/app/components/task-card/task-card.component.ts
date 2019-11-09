import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent implements OnInit {
  
  @Input() task: any;
  
  constructor() { }
  
  ngOnInit() {}
  
  removeTask(id) {
    // console.log(id);
    if(confirm("Are you sure you want to delete this task?")) {
      let elem = document.getElementById('task-'+id);
      elem.parentNode.removeChild(elem);  
    }
    
  }
  
}
