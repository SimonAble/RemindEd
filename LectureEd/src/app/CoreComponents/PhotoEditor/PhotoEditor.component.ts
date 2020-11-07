import { Component, OnInit, Input } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { config } from 'process';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from 'src/app/Authentication/Authentication.service';
import { Photo } from './Photo.model';

@Component({
  selector: 'app-PhotoEditor',
  templateUrl: './PhotoEditor.component.html',
  styleUrls: ['./PhotoEditor.component.css']
})
export class PhotoEditorComponent implements OnInit {

  @Input() photos: Photo[];
  public fileToUpload: File;
  private url: string;

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    this.url = environment.apiUrl + `users/${this.authService.activeUser.id}/photos`
  }

  public uploadFile() {

  }

}
