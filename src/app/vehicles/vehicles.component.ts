import { Component } from '@angular/core';

import { SelectedDataService } from '../selected-data.service'

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent {
  vehicles:any = []

  constructor(private SelectedDataService: SelectedDataService) {
    this.vehicles = this.SelectedDataService.vehicleData
  }
}
