import {Component, Input} from '@angular/core';
// import {App} from

@Component({
  selector: 'app-input',
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {

    @Input()
    inputMaxLength!: number

    @Input()
    inputLabel: string = "no-label"

}
