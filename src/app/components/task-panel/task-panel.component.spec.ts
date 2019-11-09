import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskPanelComponent } from './task-panel.component';
import { MaterialModule } from 'src/app/material.module';
import { TaskCardComponent } from '../task-card/task-card.component';
import { TaskComponent } from '../task/task.component';

describe('TaskPanelComponent', () => {
  let component: TaskPanelComponent;
  let fixture: ComponentFixture<TaskPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TaskCardComponent,TaskPanelComponent,TaskComponent],
      imports: [MaterialModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.title = {
      todo: 'TO DO',
      inProgress: 'IN PROGRESS',
      done: 'DONE'
    };
    component.tasks = {
      todo: [
        {
          id: 1,
          title: 'Sample Task 1',
          description: 'Sample description of task. Can be longer.'
        },
        {
          id: 4,
          title: 'Sample Task 4',
          description: 'Sample description of task. Can be longer.'
        },
        {
          id: 6,
          title: 'Sample Task 6',
          description: 'Sample description of task. Can be longer.'
        },
        {
          id: 5,
          title: 'Sample Task 5',
          description: 'Sample description of task. Can be longer.'
        }
      ],
      inProgress: [
        {
          id: 2,
          title: 'Sample Task 2',
          description: 'Sample description of task. Can be longer.'
        }
      ],
      done: [
        {
          id: 3,
          title: 'Sample Task 3',
          description: 'Sample description of task. Can be longer.'
        }
      ]
    };
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
