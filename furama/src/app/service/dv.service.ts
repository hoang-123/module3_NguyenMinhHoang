import { Service } from '../model/dichVu';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

private baseUrl = 'http://localhost:3000';

getAllService(): Observable<any> {
  return this.http.get(this.baseUrl + '/service' );
}
getServices(count = 10): Observable<Service[]> {
  return this.http.get<Service[]>(this.baseUrl + '/service').pipe(
      map(response => response.filter((service, i) => i < count))
  );
}
getServiceById(id: number): Observable<Service> {
  return this.http.get<Service>(`${this.baseUrl + '/service'}/${id}`);
}

search(name: string): Observable<Service[]> {
  return this.http.get<Service[]>(`${this.baseUrl + '/service/?search='}/${name}`).pipe(
    map(response => response.filter((service, i) => i < 10))
    );
}

createService(cus: Partial<Service>): Observable<Service> {
  return this.http.post<Service>(this.baseUrl + '/service', cus);
}

deleteService(id: number): Observable<any> {
  return this.http.delete(`${this.baseUrl + '/service'}/${id}`);
}

updateCustomer(service: Service): Observable<Service> {
  return this.http.patch<Service>(`${this.baseUrl + '/service'}/${service.id}`, service);
}
getService(id: number): Observable<any> {
  return this.http.get(this.baseUrl + '/' + id);
}
}
