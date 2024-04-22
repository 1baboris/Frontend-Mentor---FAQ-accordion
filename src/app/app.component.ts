import { Component, HostListener, OnInit } from '@angular/core';
import { QuestionComponent } from './question/question.component';
import { QuestionService } from './question.service';
import { Questions } from './mock-questions-list';
import { Question } from './question';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [QuestionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'faq-accordion-main-angular-tailwind';

  constructor(private questionService: QuestionService) {}

  questionList: Question[] = Questions;

  selectedQuestionIndex: number = -1;

  ngOnInit(): void {
    this.questionList = this.questionService.getQuestionsList();
  }

  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    switch (event.key) {
      case 'ArrowUp':
        this.selectPreviousQuestion();
        break;
      case 'ArrowDown':
        this.selectNextQuestion();
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

  removeFocus() {
    this.selectedQuestionIndex = -1; // ou une autre valeur qui n'existe pas dans la liste des questions
  }
}
