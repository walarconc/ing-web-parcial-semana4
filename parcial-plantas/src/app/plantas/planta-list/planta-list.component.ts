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
  interior: number = 0;
  exterior: number = 0;
  constructor(private plantaService: PlantaService) { }

  ngOnInit(): void {
    this.obtenerPlantas();
  }

  obtenerPlantas(): void {
    this.plantaService.obtenerPlantas().subscribe((plantas) => {
      this.plantas = plantas;
      this.interior =  this.plantas.filter(p => p.tipo === 'Interior').length;
      this.exterior =  this.plantas.filter(p => p.tipo === 'Exterior').length;
    });
  }
}
