import { Injectable } from '@angular/core';
import { Backend } from '../../services/backend.service';
import { Task } from './task';

@Injectable()
export class TaskService {

  constructor (private backend: Backend) {}

  getTasks(): Promise<Task[]> {
    return this.backend.get('task');
  }
}
