import { Injectable } from '@angular/core';
import { LectureNavigationModel, LectureTopic } from './CreateLectureContent.model';

@Injectable({
  providedIn: 'root'
})
export class CreateLectureContentService {

constructor() { }

getNavigationTopics() {
  let lectureTopicNavigationItems = new LectureNavigationModel(
    [
      new LectureTopic('Concept'),
      new LectureTopic('History'),
      new LectureTopic('Application'),
      new LectureTopic('Quiz'),
      new LectureTopic('Discussion'),
      new LectureTopic('Resources')
    ]
  )
  return lectureTopicNavigationItems;
}

}
