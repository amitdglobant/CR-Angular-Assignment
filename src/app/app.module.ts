import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskPanelComponent } from './components/task-panel/task-panel.component';
import { TaskComponent } from './components/task/task.component';
import { TaskCardComponent } from './components/task-card/task-card.component';
import { ConfirmationDialog } from './components/task-card/task-card.component';
import { TaskService } from './shared/task.service'
import { MaterialModule } from './shared/material.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    TaskPanelComponent,
    TaskComponent,
    TaskCardComponent,
    ConfirmationDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [TaskPanelComponent,ConfirmationDialog],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule {}
