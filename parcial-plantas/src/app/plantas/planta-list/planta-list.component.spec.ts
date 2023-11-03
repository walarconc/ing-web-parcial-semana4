import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantaListComponent } from './planta-list.component';
import {DebugElement} from "@angular/core";
import {Planta} from "../planta";
import {of} from "rxjs";
import {HttpClientModule} from "@angular/common/http";
import {PlantaService} from "../planta.service";
describe('PlantaListComponent', () => {
  let component: PlantaListComponent;
  let fixture: ComponentFixture<PlantaListComponent>;
  let debug: DebugElement;
  let plantaServiceMock;
  let plantasListTest = [
    new Planta(1,'Planta1','nombre1','Interior',1,'Todos','prueba1'),
    new Planta(2,'Planta2','nombre2','Interior',2,'Templado','prueba2'),
    new Planta(3,'Planta13','nombre13','Exterior',3,'Frío','prueba3'),
  ]

  beforeEach(async () => {
    plantaServiceMock = jasmine.createSpyObj(['obtenerPlantas']);
    plantaServiceMock.obtenerPlantas.and.returnValue(of(plantasListTest));
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ PlantaListComponent ],
      providers: [{provide: PlantaService, useValue: plantaServiceMock }]
    })
      .compileComponents();
    fixture = TestBed.createComponent(PlantaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debug = fixture.debugElement
    component.plantas = plantasListTest;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debería mostrar los datos en la tabla', () => {
    const tablaDeDatos = fixture.nativeElement.querySelector('.table');
    const filas = tablaDeDatos.querySelectorAll('tbody tr');
    expect(filas.length).toBe(3);
  });
});
