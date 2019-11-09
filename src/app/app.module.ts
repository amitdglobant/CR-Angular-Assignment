import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { TaskPanelComponent } from './components/task-panel/task-panel.component';
import { TaskComponent } from './components/task/task.component';
import { TaskCardComponent } from './components/task-card/task-card.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TaskPanelComponent,
    TaskComponent,
    TaskCardComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [TaskPanelComponent, AddTaskComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
