import { Question } from '../question';
import { CommonModule } from '@angular/common';
import { QuestionService } from '../question.service';
import { Questions } from '../mock-questions-list';
import { Component, OnInit } from '@angular/core';

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
    document.addEventListener('keydown', this.onKeyDown.bind(this));
  }

  updateIsOpen(question: Question): void {
    if (question.isOpen) {
      question.isOpen = false;
    } else {
      question.isOpen = true;
    }
  }

  selectedQuestionIndex: number = -1;

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
      case 'Escape':
        this.removeFocus();
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

  removeFocus() {
    this.selectedQuestionIndex = -1; // ou une autre valeur qui n'existe pas dans la liste des questions
  }
}
