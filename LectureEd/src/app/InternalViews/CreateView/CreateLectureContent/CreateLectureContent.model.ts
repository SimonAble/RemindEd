import { QuestionModel } from 'src/app/CoreComponents/QuizEditor/Quiz.model';

export class LectureNavigationModel {
  lectureId: string;
  topics: Topic[];

  constructor(topics: Topic[] = []) {
    this.topics = topics;
  }
}

export class Topic {
  topicId: string;
  topicTabName: string;
  topicActive: boolean;
  topicTypeCode: TopicTypes;
  topicTitle: string;
  topicContents: string;
  questions: QuestionModel[];

  constructor(topicTabName: string, topicActive: boolean = false, topicTitle: string = "", topicContents: string = "", questions: QuestionModel[] = [], topicTypeCode?:TopicTypes) {
    this.topicTabName = topicTabName;
    this.topicActive = topicActive;
    this.topicTitle = topicTitle;
    this.topicContents = topicContents;
    this.topicTypeCode = topicTypeCode;
    this.questions = questions;
  }
}

export enum TopicTypes {
  Custom = 0,
  Article = 1,
  Resources = 2,
  Questions = 3,
  Concept = 4,
  Video = 8,
  Discussion = 6,
  Application = 7,
  //Used to route user to suggestions page
  Suggestion = 9
}
