import { Component, OnInit, ViewChild, EventEmitter, Input, Output } from '@angular/core';
import * as BalloonBlockEditor from '@ckeditor/ckeditor5-build-balloon-block';
// import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { TopicTypes, Topic } from 'src/app/InternalViews/CreateView/CreateLectureContent/CreateLectureContent.model';
import { AuthenticationService } from 'src/app/Authentication/Authentication.service';
import { MaterialService } from 'src/app/CoreServices/Material.service';
import { SnackBarStateClass } from 'src/app/CoreModels/enum';
import { CKEditor5 } from '@ckeditor/ckeditor5-angular';

@Component({
  selector: 'app-CoLabEditor',
  templateUrl: './CoLabEditor.component.html',
  styleUrls: ['./CoLabEditor.component.css']
})
export class CoLabEditorComponent implements OnInit {
  public TitleEditor = BalloonBlockEditor;
  public ContentEditor = BalloonBlockEditor;

  public topicType = TopicTypes;

  public ckConfig = {
    placeholder: 'Type the content here!',
  }

  @ViewChild('titleEditor') titleEditor: any;
  @ViewChild('contentEditor') contentEditor: any;

  @Input() activeTopic: Topic;

  @Input() resetEditor: boolean;
  @Output() emitSaveCourseContents = new EventEmitter<Topic>();

  constructor(
    private authenticationService: AuthenticationService,
    private materialService: MaterialService) { }

  ngOnInit() {
    this.setEditorData();
  }

  ngOnChanges() {
    console.log("OnChanges Event Triggered in Editor");
    console.log(JSON.stringify(this.activeTopic));
    this.setEditorData();
  }

  public setEditorData() {
    console.log("Setting data");
    if (this.titleEditor && this.titleEditor.editorInstance) {
      if(this.activeTopic.topicTitle) {
        this.titleEditor.editorInstance.setData(this.activeTopic.topicTitle);
      }
      else {
        this.titleEditor.editorInstance.setData("");
      }
    }
    if (this.contentEditor && this.contentEditor.editorInstance) {

      if(this.activeTopic.topicTitle) {
        this.contentEditor.editorInstance.setData(this.activeTopic.topicContents);
      }
      else {
        this.contentEditor.editorInstance.setData("");
      }
    }
  }

  public syncTopicContent() {
    console.log("Change detected, syncing topic contents.");

    if (this.titleEditor && this.titleEditor.editorInstance) {
      let title = this.titleEditor.editorInstance.getData();
      this.activeTopic.topicTitle = title;
    }
    if (this.contentEditor && this.contentEditor.editorInstance) {
      let contents = this.contentEditor.editorInstance.getData();
      this.activeTopic.topicContents = contents;
    }
  }

  public syncConceptContent() {
    if (this.contentEditor && this.contentEditor.editorInstance) {
      let contents = this.contentEditor.editorInstance.getData();
      this.activeTopic.topicContents = contents;
    }
  }
}
