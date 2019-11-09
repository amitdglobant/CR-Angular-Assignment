import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {
  // tslint:disable-next-line:variable-name
  private _task_data = new Subject();
  // tslint:disable-next-line:variable-name
  public task_data = this._task_data.asObservable();

  // tslint:disable-next-line:variable-name
  private _edit_task_data = new Subject();
  // tslint:disable-next-line:variable-name
  public edit_task_data = this._edit_task_data.asObservable();

  // tslint:disable-next-line:variable-name
  private _delete_task_data = new Subject();
  // tslint:disable-next-line:variable-name
  public delete_task_data = this._delete_task_data.asObservable();
  constructor() { }

  addTask(data) {
    this._task_data.next(data);
  }
  getTask() {
    return this.task_data;
  }

  editTask(data) {
    this._edit_task_data.next(data);
  }
  getEditedTask() {
    return this.edit_task_data;
  }

  deleteTask(data) {
    this._delete_task_data.next(data);
  }

  getDeletedTask() {
    return this.delete_task_data;
  }

}
