import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { config } from 'process';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from 'src/app/Authentication/Authentication.service';
import { Photo } from './Photo.model';
import { MaterialService } from 'src/app/CoreServices/Material.service';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-PhotoEditor',
  templateUrl: './PhotoEditor.component.html',
  styleUrls: ['./PhotoEditor.component.css']
})
export class PhotoEditorComponent implements OnInit {
  @ViewChild('fileInput') fileInput: ElementRef;
  @Input() currentPhotoUrl: string;
  @Input() photoApiSignature: string;
  @Output() emitPhotoUploadedUrl: EventEmitter<string> = new EventEmitter();
  uploader:FileUploader;
  hasAnotherDropZoneOver:boolean;
  response:string;
  baseUrl = environment.apiUrl;

  responseUrl: string;

  constructor (private authService: AuthenticationService, private materialService: MaterialService){
  }

  ngOnInit(): void {
    this.initializeFileUploader();
    console.log("Current Photo Url: " + this.currentPhotoUrl);
  }

  initializeFileUploader() {
      this.uploader = new FileUploader({
      url: this.baseUrl + "users/" + this.authService.decodedToken.nameid + "/photos/" + this.photoApiSignature,
      authToken: 'Bearer ' + localStorage.getItem('token'),
      isHTML5: true,
      allowedFileType: ['image'],
      maxFileSize: 10 * 1024 * 1024,
      removeAfterUpload: true,
      autoUpload: true,
    });

    this.uploader.onAfterAddingFile = (file) => {file.withCredentials = false;};

    this.hasAnotherDropZoneOver = false;

    this.response = '';

    this.uploader.response.subscribe(
      res => {
        this.response = JSON.parse(res);
        console.log(this.response);
        this.materialService.openSnackBar("Profile Picture Succesfully Uploaded!");
        this.uploader.clearQueue();

        console.log(this.response);
        this.responseUrl = this.response['url'];
        this.emitPhotoUploadedUrl.emit(this.response['url']);
        this.fileInput.nativeElement.values = "";
        this.initializeFileUploader();
      },
      err => {this.materialService.openSnackBar("Upload failed for this image..");}
    );
  }

  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }


}
