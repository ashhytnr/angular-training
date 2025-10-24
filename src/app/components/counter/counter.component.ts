import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';

@Component ({
  selector: 'app-counter',
  imports: [],
  templateUrl: "./counter.component.html"
})

export class CounterComponent implements OnInit, OnChanges, OnDestroy{

  @Input()
  //

  counterNew: number = 0
  // counter = 0;

  @Input()
  randomText!: string

  @Output()
  counterChange = new EventEmitter<number>();

  addToCount() {
    this.counterNew ++
    this.counterChange.emit(this.counterNew);
  }

  functionNameMaybe() {
    this.counterNew ++
    console.log(this.counterNew)

    if(this.counterNew > 10){
      this.randomText = 'yayyy!!';
    }
  }

  ngOnInit():void {
    console.log("This has been initialised!")
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(`This is a change, ${changes}`)
  }

  ngOnDestroy() {
    console.log("This has been destroyed")
  }
}
