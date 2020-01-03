import { Contract } from './../model/hopdong';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class HopDongService {

  constructor(private http: HttpClient) { }

private baseUrl = 'http://localhost:3000';

getAllContract(): Observable<any> {
  return this.http.get(this.baseUrl + '/contract' );
}
getContracts(count = 10): Observable<Contract[]> {
  return this.http.get<Contract[]>(this.baseUrl + '/contract').pipe(
      map(response => response.filter((contract, i) => i < count))
  );
}
getContractById(id: number): Observable<Contract> {
  return this.http.get<Contract>(`${this.baseUrl + '/contract'}/${id}`);
}

search(name: string): Observable<Contract[]> {
  return this.http.get<Contract[]>(`${this.baseUrl + '/contract/?search='}/${name}`).pipe(
    map(response => response.filter((contract, i) => i < 10))
    );
}

createContract(cus: Partial<Contract>): Observable<Contract> {
  return this.http.post<Contract>(this.baseUrl + '/contract', cus);
}

deleteContract(id: number): Observable<any> {
  return this.http.delete(`${this.baseUrl + '/contract'}/${id}`);
}

updateContract(contract: Contract): Observable<Contract> {
  return this.http.patch<Contract>(`${this.baseUrl + '/contract'}/${contract.id}`, contract);
}

}
