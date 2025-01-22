import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskListComponent } from './task-list/task-list.component';
import { TaskFormComponent } from './task-form/task-form.component';
// import { TaskDetailComponent } from './task-detail/task-detail.component';

import { TasksRoutingModule } from './tasks-routing.module';
import { FormsModule } from '@angular/forms';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { RouterLink, RouterModule } from '@angular/router';
import { MaterialModule } from '../SharedMaterial.module';


@NgModule({
  declarations: [
    // TaskDetailComponent,
    // TaskListComponent,
    // TaskFormComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    // FormsModule,
    // RouterLink,
    TasksRoutingModule
  ],
  exports: [
    // TaskListComponent,
    // TaskFormComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TasksModule { }
