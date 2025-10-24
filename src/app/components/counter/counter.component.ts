import { Component, EventEmitter, Output } from '@angular/core';

@Component ({
  selector: 'app-counter',
  templateUrl: "./counter.component.html"
})

export class CounterComponent {

  counter = 0;

  @Output()
  counterChange = new EventEmitter<number>();

  addToCount() {
    this.counter ++
    this.counterChange.emit(this.counter);

  }
}
