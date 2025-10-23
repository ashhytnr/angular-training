import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.html',
  styleUrl: './hello.scss'
})
export class Hello {

}

// notes!!

//  <component-name [param] = " "> </component-name>

// export  class componentNameDifferent {
// @Input ()
// param!: string

// @Input ()
//

// ngOnIt():void {
// console.log('footer component initialised');
// console.log(this.param);
// }

// ngOnChanges(changes: simpleChanges): void {
// console.log(this.counter)
// }

// ngOnDestroy():void {
// console.log('footer destroyed')
// }

// }
