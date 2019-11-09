import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTaskCardComponent } from './new-task-card.component';

describe('NewTaskCardComponent', () => {
  let component: NewTaskCardComponent;
  let fixture: ComponentFixture<NewTaskCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTaskCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTaskCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
