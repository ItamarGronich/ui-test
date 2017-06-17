import { Injectable } from '@angular/core';
import { Backend } from '../../services/backend.service';
import { Activity } from './activity';

@Injectable()
export class ActivityService {

  constructor (private backend: Backend) {}

  getActivities(): Promise<Activity[]> {
    return this.backend.get('activity');
  }
}
