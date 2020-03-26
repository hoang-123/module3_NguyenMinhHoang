import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListBookComponent } from './list-book/list-book.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { DetalBookComponent } from './detal-book/detal-book.component';
import { ListAppComponent } from './list-app/list-app.component';
import { EditAppComponent } from './edit-app/edit-app.component';
import { CreateAppComponent } from './create-app/create-app.component';

@NgModule({
  declarations: [
    AppComponent,
    ListBookComponent,
    CreateBookComponent,
    EditBookComponent,
    DeleteBookComponent,
    DetalBookComponent,
    ListAppComponent,
    EditAppComponent,
    CreateAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
