import { Component, OnInit } from '@angular/core';
import { MainService } from "src/app/shared/services.service";
import { Question } from "../shared/question.model"
@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.scss']
})
export class MainScreenComponent implements OnInit {
  questionsList: Question[] = [];
  currentQuestion: Question;
  currentQuestionID = 0;

  constructor(private mainService: MainService) {
  }

  ngOnInit() {
    this.getQuestionsData();
  }

  getQuestionsData(): void {
    this.mainService.getContentJSON()
      .subscribe(
      ques => {
        this.questionsList = ques;
        this.currentQuestion = this.questionsList[0];
      },
      err => {
        console.log(err);
      })
  }

  next(): void {
      this.currentQuestion = this.questionsList[++this.currentQuestionID];
      console.log(this.questionsList)
  }

  prev(): void {
      this.currentQuestion = this.questionsList[--this.currentQuestionID];
  }

  calcMark(){
    let numRightAns=0;
    this.questionsList.forEach(ques => {
      numRightAns+= ques.UserAnswer?1:0
    });
 
  alert ((numRightAns/this.questionsList.length)*100)
 }
}
