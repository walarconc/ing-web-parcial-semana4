import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantaListComponent } from './planta-list.component';

describe('PlantaListComponent', () => {
  let component: PlantaListComponent;
  let fixture: ComponentFixture<PlantaListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlantaListComponent]
    });
    fixture = TestBed.createComponent(PlantaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
