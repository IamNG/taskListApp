import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../SharedMaterial.module';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styleUrl: './task-form.component.scss',
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
