import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-CoLabEditor',
  templateUrl: './CoLabEditor.component.html',
  styleUrls: ['./CoLabEditor.component.css']
})
export class CoLabEditorComponent implements OnInit {
  constructor(private _ngZone: NgZone) { }

  ngOnInit() {
  }

  @ViewChild('autosize') autosize: CdkTextareaAutosize;

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1))
        .subscribe(() => this.autosize.resizeToFitContent(true));
  }

}
