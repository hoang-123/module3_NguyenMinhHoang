import { Awesome } from './awesome.model';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { some } from './fake-aap';


@Injectable({
  providedIn: 'root'
})
export class AwesomeService {

  constructor() {}

  getSome(): Observable<Awesome[]> {
    return of(some);
  }

  getOne(id: number): Observable<Awesome> {
    return of(some[id - 1]);
  }
  update(a: Awesome): Observable<Awesome[]> {
    return of(some.fill(a));
  }

  // addOne(some: Awesome): Observable<Awesome[]> {
  //   return of(this.some.push());
  // }

  deleteOne(id: number): Observable<Awesome> {
    return of(some.shift());
  }

}
