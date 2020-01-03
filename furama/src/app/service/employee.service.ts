import { Employee } from './../model/employee';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  constructor(private http: HttpClient) { }

private baseUrl = 'http://localhost:3000';

getAllEmployee(): Observable<any> {
  return this.http.get(this.baseUrl + '/employee' );
}
getEmployees(count = 10): Observable<Employee[]> {
  return this.http.get<Employee[]>(this.baseUrl + '/employee').pipe(
      map(response => response.filter((employee, i) => i < count))
  );
}
getEmployeeById(id: number): Observable<Employee> {
  return this.http.get<Employee>(`${this.baseUrl + '/employee'}/${id}`);
}

search(name: string): Observable<Employee[]> {
  return this.http.get<Employee[]>(`${this.baseUrl + '/employee/?search='}/${name}`).pipe(
    map(response => response.filter((employee, i) => i < 10))
    );
}

createEmployee(cus: Partial<Employee>): Observable<Employee> {
  return this.http.post<Employee>(this.baseUrl + '/employee', cus);
}

deleteEmployee(id: number): Observable<any> {
  return this.http.delete(`${this.baseUrl + '/employee'}/${id}`);
}

updateEmployee(employee: Employee): Observable<Employee> {
  return this.http.patch<Employee>(`${this.baseUrl + '/employee'}/${employee.id}`, employee);
}

}
