import { NgModule } from '@angular/core';
import { MatTooltipModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatDividerModule, MatSnackBarModule, MatProgressSpinnerModule, MatProgressBarModule, MatSelectModule, MatRadioModule, MatCheckboxModule, MatToolbarModule } from '@angular/material/';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  exports: [
    MatTooltipModule,
    DragDropModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatSnackBarModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
  ]
})

export class MaterialModule {}
