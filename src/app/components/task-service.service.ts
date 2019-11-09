import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  gettaskData: string;

  constructor() { }
  
  private _data = new BehaviorSubject(null);
  taskContent = this._data.asObservable();

    public setTask(data:any){
      localStorage.setItem('addTaskValues', JSON.stringify(data['addTaskValues']));
      this._data.next(data);
      console.log(data)
    }
    public getTask(){
      this.gettaskData = localStorage.getItem('addTaskValues');
      return JSON.parse(this.gettaskData);
    }
}
