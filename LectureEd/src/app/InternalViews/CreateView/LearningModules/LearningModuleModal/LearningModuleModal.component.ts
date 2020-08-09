import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TopicTabTypes } from '../../CreateLectureContent/CreateLectureContent.model';

@Component({
  selector: 'app-LearningModuleModal',
  templateUrl: './LearningModuleModal.component.html',
  styleUrls: ['./LearningModuleModal.component.css']
})
export class LearningModuleModalComponent {

  public topicType = TopicTabTypes;

  constructor(
    public dialogRef: MatDialogRef<LearningModuleModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(topicType): void {
    this.dialogRef.close({
      topicType: topicType
    });
  }

  public makeSuggestion() {
    throw new Error("Not Implemented");
  }
}
