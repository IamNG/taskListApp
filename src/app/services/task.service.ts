import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];

  constructor() { }
  getTasks(): Task[] {
    return [...this.tasks];
  }

  getTaskById(taskId: string): Task | undefined {
    return this.tasks.find((t) => t.id === taskId);
  }

  addTask(title: string, description: string = ''): Task {
    const newTask: Task = {
      id: uuidv4(),
      title,
      description,
      done: false,
    };
    this.tasks.push(newTask);
    return newTask;
  }

  deleteTask(taskId: string): void {
    this.tasks = this.tasks.filter((t) => t.id !== taskId);
  }

  toggleDone(taskId: string): void {
    const task = this.tasks.find((t) => t.id === taskId);
    if (task) {
      task.done = !task.done;
    }
  }

  filterTasks(searchTerm: string): Task[] {
    const lowerTerm = searchTerm.toLowerCase();
    return this.tasks.filter((t) =>
      t.title.toLowerCase().includes(lowerTerm)
    );
  }
}
