export class Customer {
  id: number;
  maKH: string;
  hoTen: string;
  ngaySinh: Date;
  soCM: string;
  soDT: string;
  email: string;
  diaChi: string;

  constructor(id, maKH, hoTen, ngaySinh, soCM, soDT, email, diaChi) {
      this.id = id;
      this.maKH = maKH;
      this.hoTen = hoTen;
      this.ngaySinh = ngaySinh;
      this.soCM = soCM;
      this.soDT = soDT;
      this.email = email;
      this.diaChi = diaChi;
  }

}
