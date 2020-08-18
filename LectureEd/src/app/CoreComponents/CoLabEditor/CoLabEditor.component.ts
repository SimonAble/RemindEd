import { Component, OnInit, ViewChild, EventEmitter, Input, Output } from '@angular/core';
import * as BalloonBlockEditor from '@ckeditor/ckeditor5-build-balloon-block';
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
    this.setEditorData();
  }

  public setEditorData() {
    console.log("Setting data");
    if (this.titleEditor && this.titleEditor.editorInstance) {
      this.titleEditor.editorInstance.setData(this.activeTopic.topicTitle);
    }
    if (this.contentEditor && this.contentEditor.editorInstance) {
      this.contentEditor.editorInstance.setData(this.activeTopic.topicContents);
    }
  }

  public saveContents() {
    if(this.authenticationService.isAuthenticated()) {
      if (this.titleEditor && this.titleEditor.editorInstance) {
        let title = this.titleEditor.editorInstance.getData();
        this.activeTopic.topicTitle = title;
      }
      if (this.contentEditor && this.contentEditor.editorInstance) {
        let contents = this.contentEditor.editorInstance.getData();
        this.activeTopic.topicContents = contents;
      }

      this.emitSaveCourseContents.emit(this.activeTopic);
    }
    else {
      this.materialService.openSnackBar("You must be signed in to save your progress.", SnackBarStateClass.Error)
    }
  }
}
