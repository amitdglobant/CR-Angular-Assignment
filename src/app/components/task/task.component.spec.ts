import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskComponent } from './task.component';

describe('TaskComponent', () => {
  let component: TaskComponent;
  let fixture: ComponentFixture<TaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Add and Edit Task should be correct', () => {
    fixture = TestBed.createComponent(TaskComponent);
    const h1Ele = fixture.nativeElement.querySelector('h1');
    expect(h1Ele.innetText).toContain('Add/Edit Task Panel');
  });

  it('Task Type combox value can not be blank', () => {
    fixture = TestBed.createComponent(TaskComponent);
    const sel = fixture.nativeElement.querySelector('#taskType');
    expect(sel).toBeTruthy();
  });
});
