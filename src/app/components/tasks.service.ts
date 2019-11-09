import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  static uniqueId = 7;
  taskIdToDelet: any = null;
  constructor() { }

  setTaskToDelete(id) {
    //this.taskIdToDelet
  }
}
