import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Hello} from './hello/hello';
import {CounterComponent} from './components/counter/counter.component';
import {FooterComponent} from './components/footer/footer.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Hello, CounterComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  counter2 = 0;
  complete: boolean = false

  message = "Below 10"

  addToCount() {
    // console.log("gubernatorial")
    this.counter2 ++;
  }

  onCounterChanged(count: number) {
    if (count > 10) {
      this.message = "Greater than 10"
    }
  }

}
