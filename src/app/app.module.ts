import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { TaskPanelComponent } from './components/task-panel/task-panel.component';
import { TaskComponent } from './components/task/task.component';
import { TaskCardComponent } from './components/task-card/task-card.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditmodalComponent } from './editmodal/editmodal.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskPanelComponent,
    TaskComponent,
    TaskCardComponent,
    AddTaskComponent,
    EditmodalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  entryComponents: [TaskPanelComponent, AddTaskComponent, EditmodalComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
