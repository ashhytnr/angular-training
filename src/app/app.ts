import {Component, Input, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Hello} from './hello/hello';
import {CounterComponent} from './components/counter/counter.component';
import {FooterComponent} from './components/footer/footer.component';
import {InputComponent} from './components/input/input.component/input.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Hello, CounterComponent, FooterComponent, InputComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {

  @Input()
  inputMaxLength!: number

  @Input()
  inputLabel: string = "no-label"

  changeMaxLength() {
    const maxLengthBox:any = document.getElementById('maxLength');
    return this.inputMaxLength = maxLengthBox

    // if (maxLengthBox !== typeof ) {
    //
    // }

  }

  changeLabelName() {
    const labelBox:any = document.getElementById('labelDecider');
    return this.inputLabel === labelBox

  }



  // counter2 = 0;
  // complete: boolean = false
  //
  // message = "Below 10"
  //
  // addToCount() {
  //   // console.log("gubernatorial")
  //   this.counter2 ++;
  // }
  //
  // onCounterChanged(count: number) {
  //   if (count > 10) {
  //     this.message = "Greater than 10"
  //   }
  // }

}
