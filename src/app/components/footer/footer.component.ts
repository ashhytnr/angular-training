import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})

export class FooterComponent implements OnInit, OnChanges, OnDestroy{
  @Input()
  title!: string

  @Input()
  counter!: number;

  @Input()
  complete: boolean = true

  staticValue = 'static value';

  ngOnInit(): void {
    //
    console.log('footer component initialized');``
    console.log(this.title);
    if (this.complete) {
      this.staticValue = 'something else'
      console.log(this.staticValue)
    }
  }

  ngOnDestroy() {
    console.log('this footer component is destroyed')
  }


  ngOnChanges(changes: SimpleChanges) {
    console.log(this.counter);
    if(this.counter > 10){
      this.staticValue = 'yayyy!!';
    }
  }
}

