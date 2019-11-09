import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { TaskPanelComponent } from './components/task-panel/task-panel.component';
import { TaskComponent, AddTask } from './components/task/task.component';
import { TaskCardComponent } from './components/task-card/task-card.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TaskPanelComponent,
    TaskComponent,
    TaskCardComponent,
    AddTask
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  entryComponents: [TaskPanelComponent,AddTask],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
