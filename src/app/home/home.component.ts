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
  todo = [];
  InProsess = [];
  done = [];

  constructor() { }

  ngOnInit() {
    this.addItem();
  }

  /**
  * 
  * @description add item into todo list 
  * @function addItem
  */
  addItem() {

    if (this.addTitleName != '' && this.currentId == null) {
      this.unicIndex++;
      this.todo.push({ name: this.addTitleName, id: this.unicIndex });
      this.addTitleName = '';
      this.currentId = null;
    } else if (this.addTitleName != '' && this.currentId) {

      this.todo.filter((item) => {

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
   * @param indexId it is current id 
   * @description Edit item 
   * @function editItem
   */
  editItem(indexId) {

    if (indexId) {
      this.todo.filter((item) => {
        if (item.id == indexId) {
          this.currentId = item.id
          this.addTitleName = item.name;
        }
      })
    }
  }

  /**
   * 
   * @param event 
   * @description Delete
   */
  deleteItem(deleteId, from) {
    if (deleteId) {
      let confirmval = confirm('Are you sure you want to delete this item');
      if (confirmval) {
        if (from == 'todo') {
          this.todo.splice(this.todo.findIndex(e => e.id == deleteId), 1);
        } else if (from == 'InProsess') {
          this.InProsess.splice(this.InProsess.findIndex(e => e.id == deleteId), 1);
        } else if (from == 'done') {
          this.done.splice(this.done.findIndex(e => e.id == deleteId), 1);
        }


      }

    }
  }


  /**
   * @function goToInPrsess 
   * @description Move to Item to Progress  
   */
  goToInPrsess() {

  }


  /**
   * @function drop
   * @param event CdkDragDrop
   * @description This drop event and it is geeting draged data fro dragable element 
   */
  drop(event: CdkDragDrop<string[]>) {
    console.log(event.container)
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data,
        event.previousIndex,
        event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}