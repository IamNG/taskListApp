import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-list',
  // imports: [],
  standalone: false,
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {
  tasks: Task[] = [];
  searchTerm: string = '';

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.refreshTasks();
  }

  refreshTasks(): void {
    this.tasks = this.taskService.getTasks();
  }

  onSearch(): void {
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
