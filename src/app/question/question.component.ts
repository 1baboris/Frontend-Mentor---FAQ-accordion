import { Component } from '@angular/core';
import { Question } from '../question';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css',
})
export class QuestionComponent {
  responseStatement: boolean = false;

  question: Question = {
    question: 'What is Frontend Mentor, and how will it help me?',
    reply: `Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in
    HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.`,
  };

  updateResponseStatement(): void {
    console.log('le bouton à été clicker');
    if (this.responseStatement) {
      this.responseStatement = false;
    } else {
      this.responseStatement = true;
    }
  }
}
