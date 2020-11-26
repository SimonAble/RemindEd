import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CourseModel } from 'src/app/CoreModels/Course.model';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { trigger, transition, style, animate } from "@angular/animations";

@Component({
  selector: 'app-CoLabCarousel',
  templateUrl: './CoLabCarousel.component.html',
  styleUrls: ['./CoLabCarousel.component.scss']
})
export class CoLabCarouselComponent implements OnChanges {

  @Input() slides:CourseModel[];
  @Input() coursesPerSlide: number;

  slideMatrix: CourseModel[][] = [[]];
  currentArray: CourseModel[];

  currentIndex = 0;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    this.createslideMatrix();
  }

  createslideMatrix() {
    console.log("Creating Slide Array");
    let row = 0;
    let columns = 1;

    for(let i = 0; i < this.slides.length; i++) {
      console.log(`Iterrating ${i} times. Courses per slide ${this.coursesPerSlide}, Column: ${columns}. Row: ${row}, Course: ${this.slides[i].courseID}`);
      if(columns == this.coursesPerSlide) {
        console.log("Adding New Row To Array");
        this.slideMatrix[row].push(this.slides[i]);
        this.slideMatrix.push([]);
        row += 1;
        columns = 1;
      }
      else {
        this.slideMatrix[row].push(this.slides[i]);
        columns++;
      }
    }

    this.currentArray = this.slideMatrix[this.currentIndex];
    console.log("Slide Matrix: ", JSON.stringify(this.slideMatrix));
    console.log("Slide Array: ",JSON.stringify(this.currentArray));
  }

  onPreviousClick() {
    const previous = this.currentIndex - 1;
    this.currentIndex = previous < 0 ? this.slideMatrix.length - 1 : previous;
    this.currentArray = this.slideMatrix[this.currentIndex];
    console.log("previous clicked, new current slide is: ", this.currentIndex);
    console.log("Slide Array: ",JSON.stringify(this.currentArray));
  }

  onNextClick() {
    const next = this.currentIndex + 1;
    this.currentIndex = next === this.slideMatrix.length ? 0 : next;
    this.currentArray = this.slideMatrix[this.currentIndex];
    console.log("next clicked, new current slide is: ", this.currentIndex);
    console.log("Slide Array: ",JSON.stringify(this.currentArray));
  }

}
