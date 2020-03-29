import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListBookComponent } from './list-book/list-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { DetalBookComponent } from './detal-book/detal-book.component';
import { ListAppComponent } from './list-app/list-app.component';
import { EditAppComponent } from './edit-app/edit-app.component';


const routes: Routes = [
  // { path: '', redirectTo: '/list', pathMatch: 'full' },
  // { path: '**', component: ListBookComponent },
  {
    path: 'list', component: ListAppComponent,
    children: [
      {path: 'edit/:id', component: EditAppComponent},
    ]
  },
  // {
  //   path: 'list/edit/:id', component: EditAppComponent,
  // },
  // {
  //   path: 'book', component: ListBookComponent,
  //   children: [
  //     {path: 'create', component: CreateBookComponent},
  //     {path: 'delete/:id', component: DeleteBookComponent},
  //     {path: 'edit/:id', component: EditBookComponent},
  //     {path: 'detail/:id', component: DetalBookComponent}
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
