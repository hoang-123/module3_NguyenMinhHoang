import { Customer } from './../model/customer';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

private baseUrl = 'http://localhost:3000';

getAllCustomer(): Observable<any> {
  return this.http.get(this.baseUrl + '/customer' );
}
getCustomers(count = 10): Observable<Customer[]> {
  return this.http.get<Customer[]>(this.baseUrl + '/customer').pipe(
      map(response => response.filter((customer, i) => i < count))
  );
}
getCustomerById(id: number): Observable<Customer> {
  return this.http.get<Customer>(`${this.baseUrl + '/customer'}/${id}`);
}

search(name: string): Observable<Customer[]> {
  return this.http.get<Customer[]>(`${this.baseUrl + '/customer/?search='}/${name}`).pipe(
    map(response => response.filter((customer, i) => i < 10))
    );
}

createCustomer(cus: Partial<Customer>): Observable<Customer> {
  return this.http.post<Customer>(this.baseUrl + '/customer', cus);
}

deleteCustomer(id: number): Observable<any> {
  return this.http.delete(`${this.baseUrl + '/customer'}/${id}`);
}

updateCustomer(customer: Customer): Observable<Customer> {
  return this.http.patch<Customer>(`${this.baseUrl + '/customer'}/${customer.id}`, customer);
}
getService(id: number): Observable<any> {
  return this.http.get(this.baseUrl + '/' + id);
}
}
