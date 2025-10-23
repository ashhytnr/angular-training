import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Hello} from './hello/hello';
import {Footer} from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Hello, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  counter2 = 0;

  addToCount() {
    // console.log("gubernatorial")
    this.counter2 ++;
  }
}
