import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCusComponent } from './components/khachHang/list-cus/list-cus.component';
import { CreateCusComponent } from './components/khachHang/create-cus/create-cus.component';
import { EditCusComponent } from './components/khachHang/edit-cus/edit-cus.component';
import { ListDvComponent } from './components/dichVu/list-dv/list-dv.component';
import { CreateDvComponent } from './components/dichVu/create-dv/create-dv.component';
import { EditDvComponent } from './components/dichVu/edit-dv/edit-dv.component';
import { ListNVComponent } from './components/nhanVien/list-nv/list-nv.component';
import { ListHDComponent } from './components/hopDong/list-hd/list-hd.component';


const routes: Routes = [
  {
    path: 'customer/list',
    component: ListCusComponent,
  },
  {
    path: 'customer/create',
    component: CreateCusComponent
  }
  , {
    path: 'customer/edit/:id',
    component: EditCusComponent
  },
  {
    path: 'service/list',
    component: ListDvComponent,
  },
  {
    path: 'service/create',
    component: CreateDvComponent
  }
  , {
    path: 'service/edit/:id',
    component: EditDvComponent
  }
  , {
    path: 'employee/list',
    component: ListNVComponent
  }
  , {
    path: 'contract/list',
    component: ListHDComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
