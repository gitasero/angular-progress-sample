import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {

  @Input() progressBar: number;
  @Output() progressChange = new EventEmitter<number>();
  increment = 15;
  disabled = false;

  onClick(event: MouseEvent) {
    const delta = 100 - this.progressBar;
    if (delta > this.increment) {
      this.progressChange.emit(this.increment);
    } else {
      this.progressChange.emit(delta);
    }
  }

  constructor() { }

  ngOnInit() {
  }

}