import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module'
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {DialogModule} from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { TaskPanelComponent } from './components/task-panel/task-panel.component';
import { TaskComponent } from './components/task/task.component';
import { TaskCardComponent } from './components/task-card/task-card.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskPanelComponent,
    TaskComponent,
    TaskCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    DialogModule
  ],
  entryComponents: [TaskPanelComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
