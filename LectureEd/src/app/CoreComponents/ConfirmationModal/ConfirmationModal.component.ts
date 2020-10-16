import { Component, OnInit, Inject } from '@angular/core';
import { ConfirmationOverlayModel } from './ConfirmationModal.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-ConfirmationModal',
  templateUrl: './ConfirmationModal.component.html',
  styleUrls: ['./ConfirmationModal.component.css']
})
export class ConfirmationModalComponent implements OnInit {

  overlayModel: ConfirmationOverlayModel;
  defaultOverlayTitle: string = "Confirm Course Deletion";
  defaultOverlayMessage: string = "Are you sure you want to delete this course?";

  constructor(public dialogRef: MatDialogRef<ConfirmationModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmationOverlayModel) { }

  ngOnInit() {
  }

  confirm(): void {
    this.dialogRef.close(true);
  }

  cancel(): void {
    this.dialogRef.close(false);
  }

}
