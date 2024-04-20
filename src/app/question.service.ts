import { Injectable } from '@angular/core';
import { Question } from './question';
import { Questions } from './mock-questions-list';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  getQuestionsList(): Question[] {
    return Questions;
  }
}
