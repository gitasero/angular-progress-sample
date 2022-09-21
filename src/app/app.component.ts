import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  progress = 0;

  ngOnInit(): void {
    /*this.updateProgress(6); */
  }
  updateProgressOld(value: number): void {
    if (this.progress >= 100 || value === 0) {
      return;
    }
    const delta = 100 - this.progress;

    if (value > delta) {
      value = delta;
    }

    setTimeout(() => { 
      this.progress += value; 
      this.updateProgress(value); 
    }, 200);
  }

  updateProgress(value: number): void {
    this.progress += value;
  }

}
