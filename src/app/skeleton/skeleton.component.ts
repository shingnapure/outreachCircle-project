import { Component, OnInit,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.css']
})
export class SkeletonComponent implements OnInit ,OnDestroy{

  arr:string[]=['1','2','3']
  animation = 'pulse';
  contentLoaded = false;
  // count = 2;
  widthHeightSizeInPixels = 50;

  intervalId: number | null = null;

  ngOnInit() {
    setTimeout(() => {
      this.contentLoaded = true;
    }, 2000);

    this.intervalId = window.setInterval(() => {
      this.animation = this.animation === 'pulse' ? 'progress-dark' : 'pulse';
      // this.count = this.count === 2 ? 5 : 2;
      this.widthHeightSizeInPixels =
        this.widthHeightSizeInPixels === 50 ? 100 : 50;
    }, 5000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

}
