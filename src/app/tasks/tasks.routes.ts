import { Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';

export const TASKS_ROUTES: Routes = [
  {
    path: '',
    children: [
      { path: '', component: TaskListComponent },
      { path: ':taskId', component: TaskDetailComponent }
    ]
  }
];
