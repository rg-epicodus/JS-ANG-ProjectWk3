import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalDisplayComponent } from './animal-display.component';

describe('AnimalDisplayComponent', () => {
  let component: AnimalDisplayComponent;
  let fixture: ComponentFixture<AnimalDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the AnimalCompnent', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as species 'Arctic Fox'`, async(() => {
    expect(component.species).toEqual('Arctic Fox');
  }));
});
