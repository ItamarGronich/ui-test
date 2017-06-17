import { Injectable } from '@angular/core';
import { Backend } from '../../services/backend.service';
import { Message } from './message';

@Injectable()
export class MessageService {

  constructor (private backend: Backend) {}

  getMessages(): Promise<Message[]> {
    return this.backend.get('message');
  }
}
