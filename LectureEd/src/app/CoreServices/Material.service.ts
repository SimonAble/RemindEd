import { Injectable } from '@angular/core';
import { MatSnackBarConfig, MatSnackBar } from '@angular/material';
import { SnackBarStateClass } from '../CoreModels/enum';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

constructor(private _snackBar: MatSnackBar) { }

  public openSnackBar(message: string, stateClass: SnackBarStateClass = SnackBarStateClass.Success) {
    let config = new MatSnackBarConfig();
    config.panelClass = [stateClass];
    config.duration = 3000;
    this._snackBar.open(message, "Close", config);
  }
}

