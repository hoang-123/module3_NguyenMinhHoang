import { Service } from './dichVu';
import { Employee } from './employee';
import { Customer } from './customer';
export class Contract {
  id: number;
  employee: Employee;
  customer: Customer;
  service: Service;
  ngayLam: Date;
  ngayHet: Date;
  tienDatCoc: number;
  tongTien: number;

  constructor() {}

}
