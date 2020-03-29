import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectedDataService {
  personSubject$: Observable<any>;
  vehicleSubject$: Observable<any>;
  starshipSubject$: Observable<any>;
  filmSubject$: Observable<any>;
  personData:any;
  vehicleData:any;
  shipData:any;
  filmData:any;
  private personSubject = new Subject<any>();
  private vehicleSubject = new Subject<any>();
  private starshipSubject = new Subject<any>();
  private filmSubject = new Subject<any>();
  
  constructor() { 
    this.personSubject$ = this.personSubject.asObservable();
    this.vehicleSubject$ = this.vehicleSubject.asObservable();
    this.starshipSubject$ = this.starshipSubject.asObservable()
    this.filmSubject$ = this.filmSubject.asObservable()
  }

  savePerson(data) {
    this.personData = data
    this.personSubject.next(data);
  }

  myMethod2(data) {
    this.vehicleData = data
    this.vehicleSubject.next(data);
  }

  myMethod3(data) {
    this.shipData = data
    this.starshipSubject.next(data);
  }

  myMethod4(data) {
    this.filmData = data
    this.filmSubject.next(data);
  }


}
