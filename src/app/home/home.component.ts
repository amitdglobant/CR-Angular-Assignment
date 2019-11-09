import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

/**
 * @author Tushar Kadam
 * @description Todo List add Edit Delete  
 */

export class HomeComponent implements OnInit {
  addTitleName = 'Intem';
  unicIndex = 0;
  currentId = null;
  constructor() { }


  todo = [];
  InProsess = [
  ];
  done = [];

  ngOnInit() {
    this.addItem();
  }

  /**
     * 
     * @param event 
     * @description Move to Item to Progress  
     */
  addItem() {
    console.log(this.addTitleName, this.currentId)
    if (this.addTitleName != '' && this.currentId == null) {
      this.unicIndex++;
      this.todo.push({ name: this.addTitleName, id: this.unicIndex });
      this.addTitleName = '';
      this.currentId = null;
    } else if (this.addTitleName != '' && this.currentId) {
      console.log('i am in update')
      this.todo.filter((item) => {
        console.log(item)
        if (item.id == this.currentId) {
          console.log(item.id)
          item.name = this.addTitleName;
          return item;
        }
      })
      this.addTitleName = '';
      this.currentId = null;
    }
    this.addTitleName = '';
    this.currentId = null;
  }

  /**
   * 
   * @param event 
   * @description 
   */
  editItem(indexId) {

    if (indexId) {
      this.todo.filter((item) => {
        console.log(item)
        if (item.id == indexId) {
          console.log(item.id);
          this.currentId = item.id
          this.addTitleName = item.name;
          // return item;
        }
      })
    }
  }

  /**
   * 
   * @param event 
   * @description Move to Item to Progress  
   */
  goToInPrsess() {
    let confVal = confirm('Are you sure you want to delete this Item');
    if (confVal == true) {

      return true;
    } else {

      return false;
    }
  }


  /**
   * @author Tushar Kadam
   * @param event CdkDragDrop
   */
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}