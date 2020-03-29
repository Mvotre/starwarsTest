import { Component } from '@angular/core';

import { SelectedDataService } from '../selected-data.service'

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent {
  starships:any = []

  constructor(private SelectedDataService: SelectedDataService) {
    this.starships = this.SelectedDataService.shipData
   }

}
