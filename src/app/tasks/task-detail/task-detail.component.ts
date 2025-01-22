import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../SharedMaterial.module';

@Component({
  selector: 'app-task-detail',
  imports: [
    CommonModule,
    MaterialModule
  ],
  templateUrl: './task-detail.component.html',
  styleUrl: './task-detail.component.scss'
})
export class TaskDetailComponent implements OnInit {
  task: Task | undefined;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const taskId = params.get('taskId');
      if (taskId) {
        this.task = this.taskService.getTaskById(taskId);
      }
    });
  }

  onToggleDone(): void {
    if (this.task) {
      this.taskService.toggleDone(this.task.id);
      // Re-fetch the updated task
      this.task = this.taskService.getTaskById(this.task.id);
    }
  }
}
