export class Service {
  id: number;
  maDV: string;
  tenDV: string;
  dienTich: number;
  soTang: number;
  soNguoiToiDa: number;
  chiPhiThue: number;
  kieuThue: string;
  trangThai: string;

  constructor(id, tenDV, maDV, dienTich, soTang, soNguoiToiDa, chiPhiThue, kieuThue, trangThai) {
      this.id = id;
      this.maDV = maDV;
      this.tenDV = tenDV;
      this.dienTich = dienTich;
      this.soTang = soTang;
      this.soNguoiToiDa = soNguoiToiDa;
      this.chiPhiThue = chiPhiThue;
      this.kieuThue = kieuThue;
      this.trangThai = trangThai;
  }

}
