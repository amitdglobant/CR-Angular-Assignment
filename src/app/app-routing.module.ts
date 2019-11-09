import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskPanelComponent } from './components/task-panel/task-panel.component';
import { NewTaskComponent } from './components/task/new/new.component';

const routes: Routes = [
  { path: '', component: TaskPanelComponent },
  { path: 'new', component: NewTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
