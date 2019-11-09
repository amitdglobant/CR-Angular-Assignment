import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskCardComponent } from './task-card.component';
import { MaterialModule } from 'src/app/material.module';
import { TaskPanelComponent } from '../task-panel/task-panel.component';
import { TaskComponent } from '../task/task.component';

describe('TaskCardComponent', () => {
  let component: TaskCardComponent;
  let fixture: ComponentFixture<TaskCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TaskCardComponent,TaskPanelComponent,TaskComponent],
      imports: [MaterialModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.task = {
      id: 1,
      title: 'Sample Task 1',
      description: 'Sample description of task. Can be longer.'
    }
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('TC_01:: Delet task should notify delet_Task emitter to delet task', () => {
    let mockData_ID: any = 4;
    component.deleteTask(mockData_ID);
    expect(component.delet_Task).toHaveBeenCalledWith(4);
    expect(component.delet_Task).toHaveBeenCalledTimes(1);
  });
});
