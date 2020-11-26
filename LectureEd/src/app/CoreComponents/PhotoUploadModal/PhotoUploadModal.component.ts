import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-PhotoUploadModal',
  templateUrl: './PhotoUploadModal.component.html',
  styleUrls: ['./PhotoUploadModal.component.css']
})
export class PhotoUploadModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PhotoUploadModalComponent>, @Inject(MAT_DIALOG_DATA) public data: {title: string, currentPhotoUrl: string, photoApiSignature: string}) { }

  public updatedUrl: string;

  ngOnInit() {
  }

  confirm(): void {
    this.dialogRef.close(this.updatedUrl);
  }

  cancel(): void {
    this.dialogRef.close(this.updatedUrl);
  }

  updatePhotoUrl(url: string) {
    this.updatedUrl = url;
  }
}
