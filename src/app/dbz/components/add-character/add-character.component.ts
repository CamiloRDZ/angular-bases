import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter : EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: undefined
  }

  addCharacter():void {
    if (this.character.name.length === 0 || this.character.power === undefined) return;
    this.onNewCharacter.emit(this.character);
    this.character = {name: '', power: undefined};
  }

}
