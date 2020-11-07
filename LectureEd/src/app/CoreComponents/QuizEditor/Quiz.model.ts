export class QuizModel {
  quizId: number;
  questions: QuestionModel[];
}

export class QuestionModel {
  picture: string;
  title: string;
  questionText: string;
  questionType: QuestionTypeEnum;
  autograde: boolean;
  questionOptions: QuestionOption[];
  questionAnswer: number;

  constructor() {
    this.questionOptions = [];
  }
}

export class QuestionOption {
  questionOptionsId: number;
  optionText: string;
  isCorrectAnswer: boolean;

  constructor(optionText?: string) {
    this.optionText = optionText;
  }
}
export enum QuestionTypeEnum {
  MultipleChoice = 0,
  TrueFalse = 1,
  FillInBlanks = 2,
  MultipleAnswers = 3,
  Essay = 4,
  SingleInput = 5
}
