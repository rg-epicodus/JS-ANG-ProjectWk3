import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from 'app/animal.model';

@Component({
  selector: 'animal-display',
  templateUrl: './animal-display.component.html',
  styleUrls: ['./animal-display.component.css']
})

export class AnimalDisplayComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();
  species = 'Arctic Fox';

  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }


}
