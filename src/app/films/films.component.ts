import { Component } from '@angular/core';

import { SelectedDataService } from '../selected-data.service'

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent {
  films:any = []

  constructor(private SelectedDataService: SelectedDataService) {
    this.films = this.SelectedDataService.filmData
   }
}
