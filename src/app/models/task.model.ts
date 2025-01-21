export interface Task {
    id: string;        // unique ID
    title: string;     // required
    description?: string; // optional
    done: boolean;     // mark if task is completed
  }