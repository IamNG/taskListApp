import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskListComponent } from './task-list/task-list.component';
import { TaskFormComponent } from './task-form/task-form.component';
// import { TaskDetailComponent } from './task-detail/task-detail.component';

import { TasksRoutingModule } from './tasks-routing.module';
import { FormsModule } from '@angular/forms';
import { TaskDetailComponent } from './task-detail/task-detail.component';


@NgModule({
  declarations: [
    // TaskDetailComponent,
    // TaskListComponent,
    // TaskFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    TasksRoutingModule
  ],
  exports: [
    // TaskListComponent,
    // TaskFormComponent   // If you need to use them in another module
  ]
})
export class TasksModule { }
