import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-LearningModuleModal',
  templateUrl: './LearningModuleModal.component.html',
  styleUrls: ['./LearningModuleModal.component.css']
})
export class LearningModuleModalComponent {

  constructor(
    public dialogRef: MatDialogRef<LearningModuleModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close({

    });
  }

}
