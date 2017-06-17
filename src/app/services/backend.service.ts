import { Injectable } from '@angular/core';
import { TASKS } from '../mock-data/mock-tasks'
import { MESSAGES } from '../mock-data/mock-messages'
import { ACTIVITIES } from '../mock-data/mock-activities'

/**
 * Backend service.
 * Fetches data from the backend.
 *
 * @export {Function} get - issues a GET HTTP request and returns promise.
 */
@Injectable()
export class Backend {

  get(url: string): Promise<any> {

    let data = [];

    switch (url) {

      // GET tasks.
      case 'task':
        data = TASKS;
        break;

      // GET messages.
      case 'message':
        data = MESSAGES;
        break;

      // GET activity.
      case 'activity':
        data = ACTIVITIES;
        break;
    }

    // Return resolved or rejected data.
    return data.length > 0 ? Promise.resolve(data) : Promise.reject(`Couldn\'t get ${url}`);

  }

}
