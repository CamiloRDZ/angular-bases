import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;
  public btnName: boolean = true;
  public btnAge: boolean = true;

  get capitalizado(): string {
    return this.name.toUpperCase() ;
  }

  getHeroDesripcion():string{
    return `${this.name} - ${this.age}`;
  }

  changeHero():void{
    this.name = 'Spiderman';
    this.btnName = false;
  }

  changeAge():void{
    this.age = 25;
    this.btnAge = false;
  }

  reserForm():void{
    this.name = 'ironman';
    this.age = 45;
    this.btnName = true;
    this.btnAge = true;
  }
}
