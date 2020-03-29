import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { SelectedDataService } from '../selected-data.service'
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.scss']
})
export class PersonDetailsComponent implements OnInit {
  // Ícone
  faArrowAltCircleLeft = faArrowAltCircleLeft

  // Variáveis
  details
  planet:any = ""
  species:any = ""
  vehicles = []
  starships = []
  films = []
  vehicleActive:Boolean = false
  starshipActive:Boolean = false
  filmsActive:Boolean = false

  constructor(private SelectedDataService: SelectedDataService, public httpClient: HttpClient, private router: Router) { 
    this.details = this.SelectedDataService.personData
  }

  ngOnInit(): void {
    this.getPlanet()
    this.getSpecies()
    this.vehicles = []
  }

  getPlanet(){
    this.httpClient.get(`${this.details.homeworld}`).subscribe((res:any)=>{
      this.planet = res.name
    });
  }

  getSpecies(){
    this.httpClient.get(`${this.details.species[0]}`).subscribe((res:any)=>{
      this.species = res.name
    });
  }

  getStarships() {
    this.starshipActive = true;
    this.vehicleActive = false;
    this.filmsActive = false;

    if(this.starships.length !== 0) {
      this.router.navigate(['details/starships'])
    } else {
      if(this.details.starships.length === 0){
        this.starships = [ 'none']
      } else {
        for( let i=0; i<this.details.starships.length; i++){
          this.httpClient.get(`${this.details.starships[i]}`).subscribe((res:any)=>{
            this.starships.push(res)
          });
        }
      }

      this.SelectedDataService.myMethod3(this.starships);
      this.router.navigate(['details/starships'])
    }
  }

  getFilms() {
    this.starshipActive = false;
    this.vehicleActive = false;
    this.filmsActive = true;

    if(this.films.length !== 0) {
      this.router.navigate(['details/films'])
    } else {
      if(this.details.films.length === 0){
        this.films = ['none']
      } else {
        for( let i=0; i<this.details.films.length; i++){
          this.httpClient.get(`${this.details.films[i]}`).subscribe((res:any)=>{
            this.films.push(res)
          });
        }
      }

      this.SelectedDataService.myMethod4(this.films);
      this.router.navigate(['details/films'])
    }
  }

  getVehicles() {
    this.starshipActive = false;
    this.vehicleActive = true;
    this.filmsActive = false;

    if(this.vehicles.length !== 0) {
      this.router.navigate(['details/vehicles'])
    } else {
      if(this.details.vehicles.length === 0){
        this.vehicles = [ 'none']
      } else {
        for( let i=0; i<this.details.vehicles.length; i++){
          this.httpClient.get(`${this.details.vehicles[i]}`).subscribe((res:any)=>{
            this.vehicles.push(res);
          });
        }
      }
      
      this.SelectedDataService.myMethod2(this.vehicles);
      this.router.navigate(['details/vehicles'])
    }
  }

  getUrl() {
    return `url(${this.details.imagem})` ;
  }

  bckBtn() {
    this.router.navigate(['/'])
  }
}
