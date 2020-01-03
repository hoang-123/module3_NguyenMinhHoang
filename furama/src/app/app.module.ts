import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CreateCusComponent } from './components/khachHang/create-cus/create-cus.component';
import { EditCusComponent } from './components/khachHang/edit-cus/edit-cus.component';
import { ListCusComponent } from './components/khachHang/list-cus/list-cus.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import { ListDvComponent } from './components/dichVu/list-dv/list-dv.component';
import { CreateDvComponent } from './components/dichVu/create-dv/create-dv.component';
import { EditDvComponent } from './components/dichVu/edit-dv/edit-dv.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateCusComponent,
    EditCusComponent,
    ListCusComponent,
    ListDvComponent,
    CreateDvComponent,
    EditDvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
