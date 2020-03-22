import { Awesome } from './awesome.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AwesomeService {

  constructor(private http: HttpClient) { }

private baseUrl = 'http://localhost:3000/awesomes';

getAllAwesomes(): Observable<any> {
  return this.http.get(this.baseUrl);
}
getAwesomes(count = 10): Observable<Awesome[]> {
  return this.http.get<Awesome[]>(this.baseUrl).pipe(
      map(response => response.filter((awesome, i) => i < count))
  );
}
getAwesomeById(id: number): Observable<Awesome> {
  return this.http.get<Awesome>(`${this.baseUrl}/${id}`);
}

createAwesome(cus: Partial<Awesome>): Observable<Awesome> {
  return this.http.post<Awesome>(this.baseUrl, cus);
}

deleteAwe(id: number): Observable<any> {
  return this.http.delete(`${this.baseUrl}/${id}`);
}

updateAwesome(awesome: Awesome): Observable<Awesome> {
  return this.http.put<Awesome>(`${this.baseUrl}/${awesome.id}`, awesome);
}
// deleteAwesome(awesome: Awesome): Observable<any> {
//   return this.http.delete(`${this.baseUrl}/${awesome.id}`);
// }

}
