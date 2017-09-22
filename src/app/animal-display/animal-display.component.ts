import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animal-display',
  templateUrl: './animal-display.component.html',
  styleUrls: ['./animal-display.component.css']
})
export class AnimalDisplayComponent implements OnInit {
  species = 'Arctic Fox';
  constructor() { }

  ngOnInit() {
  }

}
