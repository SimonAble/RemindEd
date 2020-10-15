export class QuizModel {
  quizId: number;
  questions: QuestionModel[];
}

export class QuestionModel {
  picture: string;
  title: string;
  question: string;
  questionType: QuestionTypeEnum;
  autoGrade: boolean;
  questionOptions: string[];
  questionAnswer: number;

  constructor() {
    this.questionOptions = [];
  }
}

export class QuestionOption {
  optionText: string;
  isCorrectAnswer: boolean;

  constructor(optionText?: string) {
    this.optionText = optionText;
  }
}
export enum QuestionTypeEnum {
  MultipleChoice = "MultipleChoice",
  TrueFalse = "TrueFalse",
  FillInBlanks = "FillInBlanks",
  MultipleAnswers = "MultipleAnswers",
  Essay = "Essay",
  SingleInput = "SingleInput"
}
