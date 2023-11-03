import { Component } from '@angular/core';
import {Planta} from "../planta";
import {PlantaService} from "../planta.service";

@Component({
  selector: 'app-planta-list',
  templateUrl: './planta-list.component.html',
  styleUrls: ['./planta-list.component.css']
})
export class PlantaListComponent {

  plantas: Array<Planta> = [];
  constructor(private plantaService: PlantaService) { }

  ngOnInit(): void {
    this.obtenerPlantas();
  }

  obtenerPlantas(): void {
    this.plantaService.obtenerPlantas().subscribe((plantas) => {
      this.plantas = plantas;
    });
  }
}
