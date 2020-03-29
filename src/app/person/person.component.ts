import { Component, OnInit, Input } from '@angular/core';
import { SelectedDataService } from '../selected-data.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  
  constructor(private SelectedDataService: SelectedDataService, private router: Router) {}

  @Input() personData:any;
  
  ngOnInit(): void {}

  public selectedData = this.personData

  getUrl() {
    return `url(${this.personData.imagem})` ;
  }

  personDetail() {
    this.SelectedDataService.savePerson(this.personData);
    this.router.navigate(['/details'])
  }
}
