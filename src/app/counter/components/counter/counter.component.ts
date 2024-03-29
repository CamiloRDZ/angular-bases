import { Component } from "@angular/core";


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
})

export class CounterComponent {

  public counter: number = 10;

  increaseBy(val:number): void {
    this.counter += val;
  }

  resetCounter(){
    this.counter = 10;
  }
  constructor() { }
}
