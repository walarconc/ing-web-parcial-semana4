import { PlantaService } from './planta.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {inject, TestBed} from '@angular/core/testing';

describe('PlantaService', () => {
  let service: PlantaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PlantaService]
    });
  });

  it('should ...', inject([PlantaService], (service: PlantaService) => {
    expect(service).toBeTruthy();
  }));
});
