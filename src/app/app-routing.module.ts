import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskPanelComponent } from './components/task-panel/task-panel.component';

const routes: Routes = [{ path: '', component: TaskPanelComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
