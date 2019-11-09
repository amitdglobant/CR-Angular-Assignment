import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { TaskPanelComponent } from './components/task-panel/task-panel.component';
import { TaskComponent, TaskModal } from './components/task/task.component';

import { TaskCardComponent } from './components/task-card/task-card.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskPanelComponent,
    TaskComponent,
    TaskCardComponent,
    TaskModal
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  entryComponents: [TaskPanelComponent, TaskModal],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
