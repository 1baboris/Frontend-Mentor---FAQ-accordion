import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { CommonModule } from '@angular/common';
import { QuestionService } from '../question.service';
import { Questions } from '../mock-questions-list';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css',
})
export class QuestionComponent implements OnInit {
  questionList: Question[] = Questions;

  constructor(private questionService: QuestionService) {}

  ngOnInit(): void {
    this.questionList = this.questionService.getQuestionsList();
  }

  updateIsOpen(question: Question): void {
    if (question.isOpen) {
      question.isOpen = false;
    } else {
      question.isOpen = true;
    }
  }

  selectedQuestionIndex: number = 0;

  onKeyDown(event: KeyboardEvent) {
    switch (event.key) {
      case 'ArrowUp':
        this.selectPreviousQuestion();
        break;
      case 'ArrowDown':
        this.selectNextQuestion();
        break;
      case ' ':
      case 'Enter':
        this.toggleAnswer();
        break;
    }
  }

  selectPreviousQuestion() {
    this.selectedQuestionIndex = Math.max(0, this.selectedQuestionIndex - 1);
  }

  selectNextQuestion() {
    this.selectedQuestionIndex = Math.min(
      this.questionList.length - 1,
      this.selectedQuestionIndex + 1
    );
  }

  selectQuestion(index: number) {
    this.selectedQuestionIndex = index;
  }

  toggleAnswer() {
    this.questionList[this.selectedQuestionIndex].isOpen =
      !this.questionList[this.selectedQuestionIndex].isOpen;
  }
}
