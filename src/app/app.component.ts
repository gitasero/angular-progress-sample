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
    setTimeout(() => {
      this.progress = 20;
    }, 500);
  }

  updateProgress(value: number): void {
        this.progress += value;
    }
    
}
