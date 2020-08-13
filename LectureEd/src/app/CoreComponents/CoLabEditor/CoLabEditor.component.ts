import { Component, OnInit, ViewChild, EventEmitter, Input, Output } from '@angular/core';
import * as BalloonBlockEditor from '@ckeditor/ckeditor5-build-balloon-block';
import { TopicContentModel, TopicTypes, Topic } from 'src/app/InternalViews/CreateView/CreateLectureContent/CreateLectureContent.model';

@Component({
  selector: 'app-CoLabEditor',
  templateUrl: './CoLabEditor.component.html',
  styleUrls: ['./CoLabEditor.component.css']
})
export class CoLabEditorComponent implements OnInit {
  public TitleEditor = BalloonBlockEditor;
  public ContentEditor = BalloonBlockEditor;

  public topic: TopicContentModel = new TopicContentModel();
  public topicType = TopicTypes;

  @ViewChild('titleEditor') titleEditor: any;
  @ViewChild('contentEditor') contentEditor: any;

  @Input() activeTopic: Topic;

  @Input() resetEditor: boolean;
  @Output() emitSetTopicContents = new EventEmitter<TopicContentModel>();

  constructor() { }

  ngOnInit() {
    this.setEditorData();
  }

  ngOnChanges() {
    console.log("OnChanges Event Triggered in Editor");
    this.setEditorData();
  }

  public setEditorData() {
    console.log("Setting data");
    if (this.titleEditor && this.titleEditor.editorInstance) {
      this.titleEditor.editorInstance.setData(this.activeTopic.topicContents.title);
      // return this.titleEditor.editorInstance.getData();
    }
    if (this.contentEditor && this.contentEditor.editorInstance) {
      this.contentEditor.editorInstance.setData(this.activeTopic.topicContents.contents);
      // return this.titleEditor.editorInstance.getData();
    }
  }

  public saveContents() {
    if (this.titleEditor && this.titleEditor.editorInstance) {
      let title = this.titleEditor.editorInstance.getData();
      console.log(title);
      this.topic.title = title;
    }
    if (this.contentEditor && this.contentEditor.editorInstance) {
      let contents = this.contentEditor.editorInstance.getData();
      console.log(contents);
      this.topic.contents = contents;
    }

    this.emitSetTopicContents.emit(this.topic);
  }
}
