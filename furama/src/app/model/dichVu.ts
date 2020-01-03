export class Service {
  id: number;
  tenDV: string;
  dienTich: number;
  soTang: number;
  soNguoiToiDa: number;
  chiPhiThue: number;
  kieuThue: string;
  trangThai: string;

  constructor(id, tenDV, dienTich, soTang, soNguoiToiDa, chiPhiThue, kieuThue, trangThai) {
      this.tenDV = tenDV;
      this.dienTich = dienTich;
      this.soTang = soTang;
      this.soNguoiToiDa = soNguoiToiDa;
      this.chiPhiThue = chiPhiThue;
      this.kieuThue = kieuThue;
      this.trangThai = trangThai;
  }

}
