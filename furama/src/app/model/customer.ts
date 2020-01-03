export class Customer {
  id: number;
  hoTen: string;
  ngaySinh: Date;
  soCM: string;
  soDT: string;
  email: string;
  diaChi: string;

  constructor(id, hoTen, ngaySinh, soCM, soDT, email, diaChi) {
      this.id = id;
      this.ngaySinh = ngaySinh;
      this.soCM = soCM;
      this.soDT = soDT;
      this.email = email;
      this.diaChi = diaChi;
  }

}
