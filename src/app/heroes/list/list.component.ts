import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroesList: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Flash'];
  public heroRemove?: string;

  removeHeroe():void {

    this.heroRemove = this.heroesList.pop();
  }

}
