import { Component, OnInit, ViewChild, EventEmitter, Input, Output } from '@angular/core';
import * as CustomEditor from '../../../lib/ckeditor5/ckeditor';
import { TopicTypes, Topic } from 'src/app/InternalViews/CreateView/CreateLectureContent/CreateLectureContent.model';
import { AuthenticationService } from 'src/app/Authentication/Authentication.service';
import { MaterialService } from 'src/app/CoreServices/Material.service';
import { environment } from 'src/environments/environment';
import { PhotoContextType } from './PhotoContextType';

@Component({
  selector: 'app-CoLabEditor',
  templateUrl: './CoLabEditor.component.html',
  styleUrls: ['./CoLabEditor.component.css']
})
export class CoLabEditorComponent implements OnInit {
  public ContentEditor = CustomEditor;

  public topicType = TopicTypes;
  public apiUrl = environment.apiUrl;

  public ckConfig = {
    placeholder: 'Type the content here!',
    blockToolbar: [
      'heading',
      '|',
      'undo',
      'redo',
      '|','alignment',
      '|','link', 'imageInsert', 'mediaEmbed', 'insertTable', 'codeBlock'
    ],
    toolbar: {
      items: [
          'fontSize', 'fontFamily', 'fontColor',
          '|','bold','italic','underline','strikethrough','subscript','superscript','blockQuote',
          '|','numberedList', 'bulletedList', 'todoList',
          '|','alignment','indent','outdent',
          '|','mathType', 'chemType', 'specialCharacters',
          '|','highlight'
      ]
    }
  }

  @ViewChild('titleEditor') titleEditor: any;
  @ViewChild('contentEditor') contentEditor: any;

  @Input() activeTopic: Topic;
  @Input() isReadOnly: boolean = false;

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

  onReady($event) {

    console.log($event);
    $event.plugins.get('FileRepository').createUploadAdapter = (loader) => {

      console.log("Upload Adapter initialized: ", loader);
      console.log("Upload Adapter initialized: ", JSON.stringify(loader));
      return new MyUploadAdapter(loader, this.authenticationService.activeUser.id);

    };
  }
}

class MyUploadAdapter {

  xhr: any;
  loader: any;

  photoContext = PhotoContextType;
  userId: number;
  private apiUrl: string;

  constructor(loader, userId: number) {
    // The file loader instance to use during the upload.
    this.loader = loader;
    this.userId = userId;
    this.apiUrl = `${environment.apiUrl}users/${this.userId}/photos/UploadToCloudinary`;
  }

  // Starts the upload process.
  upload() {

    console.log("File: " + this.loader.file);
    console.log("File: " + JSON.stringify(this.loader.file));
    return this.loader.file

      .then(file => new Promise((resolve, reject) => {

        this._initRequest();

        this._initListeners(resolve, reject, file);

        this._sendRequest(file);

      }));
  }

  // Aborts the upload process.

  abort() {
    if (this.xhr) {
      this.xhr.abort();
    }
  }

  // Initializes the XMLHttpRequest object using the URL passed to the constructor.
  _initRequest() {

    const xhr = this.xhr = new XMLHttpRequest();

    // Note that your request may look different. It is up to you and your editor
    // integration to choose the right communication channel. This example uses
    // a POST request with JSON as a data structure but your configuration
    // could be different.
    // Replace below url with your API url

    xhr.open('POST', this.apiUrl, true);
    xhr.responseType = 'json';
  }

  // Initializes XMLHttpRequest listeners.
  _initListeners(resolve, reject, file) {
    const xhr = this.xhr;
    const loader = this.loader;
    const genericErrorText = `Couldn't upload file: ${file.name}.`;

    xhr.addEventListener('error', () => reject(genericErrorText));

    xhr.addEventListener('abort', () => reject());

    xhr.addEventListener('load', () => {

      const response = xhr.response;

      // This example assumes the XHR server's "response" object will come with
      // an "error" which has its own "message" that can be passed to reject()
      // in the upload promise.

      // Your integration may handle upload errors in a different way so make sure
      // it is done properly. The reject() function must be called when the upload fails.

      if (!response || response.error) {

        return reject(response && response.error ? response.error.message : genericErrorText);

      }

      // If the upload is successful, resolve the upload promise with an object containing
      // at least the "default" URL, pointing to the image on the server.
      // This URL will be used to display the image in the content. Learn more in the
      // UploadAdapter#upload documentation.

      resolve({

        default: response.url

      });

    });



    // Upload progress when it is supported. The file loader has the #uploadTotal and #uploaded

    // properties which are used e.g. to display the upload progress bar in the editor

    // user interface.

    if (xhr.upload) {

      xhr.upload.addEventListener('progress', evt => {

        if (evt.lengthComputable) {

          loader.uploadTotal = evt.total;

          loader.uploaded = evt.loaded;
        }
      });
    }
  }

  // Prepares the data and sends the request.
  _sendRequest(file) {
    // Prepare the form data.
    const data = new FormData();
    data.append('upload', file);

    console.log("Data to Upload: " + JSON.stringify(data));

    // Important note: This is the right place to implement security mechanisms
    // like authentication and CSRF protection. For instance, you can use
    // XMLHttpRequest.setRequestHeader() to set the request headers containing
    // the CSRF token generated earlier by your application.
    console.log("Setting Authorization: " + localStorage.getItem('token'));
    this.xhr.setRequestHeader('Authorization' ,`bearer ${localStorage.getItem('token')}`)
    // Send the request.
    this.xhr.send(data);

  }
}
