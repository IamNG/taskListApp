import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-form',
  // imports: [],
  standalone: false,
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss'
})
export class TaskFormComponent {
  constructor(private taskService: TaskService) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      const { title, description } = form.value;
      this.taskService.addTask(title, description);
      form.reset(); // Reset the form after submitting
    }
  }
}
