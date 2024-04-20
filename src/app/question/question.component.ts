import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { CommonModule } from '@angular/common';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css',
})
export class QuestionComponent implements OnInit {
  questionList: Question[] | undefined;

  constructor(private questionService: QuestionService) {}

  updateIsOpen(question: Question): void {
    if (question.isOpen) {
      question.isOpen = false;
    } else {
      question.isOpen = true;
    }
  }

  ngOnInit(): void {
    this.questionList = this.questionService.getQuestionsList();
  }
}
