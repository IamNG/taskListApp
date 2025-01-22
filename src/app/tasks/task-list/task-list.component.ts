import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';
import { TaskFormComponent } from '../task-form/task-form.component';
import { TaskDetailComponent } from '../task-detail/task-detail.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { MaterialModule } from '../../SharedMaterial.module';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    TaskFormComponent,
    MaterialModule
    // TaskDetailComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {
  tasks: Task[] = [];
  searchTerm: string = '';

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.refreshTasks();
  }

  refreshTasks() {
    this.tasks = this.taskService.getTasks();
  }

  onSearch() {
    if (this.searchTerm.trim()) {
      this.tasks = this.taskService.filterTasks(this.searchTerm);
    } else {
      this.refreshTasks();
    }
  }

  onDelete(taskId: string) {
    this.taskService.deleteTask(taskId);
    this.refreshTasks();
  }

  onToggleDone(taskId: string) {
    this.taskService.toggleDone(taskId);
    this.refreshTasks();
  }
}
