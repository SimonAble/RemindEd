import { Injectable } from '@angular/core';
import { LectureNavigationModel, Topic } from './CreateLectureContent.model';

@Injectable({
  providedIn: 'root'
})
export class CreateLectureContentService {

constructor() { }

getNavigationTopics() {
  let lectureTopicNavigationItems = new LectureNavigationModel(
    [
      new Topic('Concept', true),
      new Topic('History'),
      new Topic('Application'),
      new Topic('Quiz'),
      new Topic('Discussion'),
      new Topic('Resources')
    ]
  )
  return lectureTopicNavigationItems;
}

}
