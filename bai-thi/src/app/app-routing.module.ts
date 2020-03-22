import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListBookComponent } from './list-book/list-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { DetalBookComponent } from './detal-book/detal-book.component';
import { ListAppComponent } from './list-app/list-app.component';
import { CreateAppComponent } from './create-app/create-app.component';
import { EditAppComponent } from './edit-app/edit-app.component';


const routes: Routes = [
  {
    path: 'list',
    component: ListAppComponent
  },
  {
    path: 'create',
    component: CreateAppComponent
  }
  , {
    path: 'edit/:id',
    component: EditAppComponent
  }
  // , {
  //   path: 'delete/:id',
  //   component: DeleteBookComponent
  // }
  // , {
  //   path: 'list/:id',
  //   component: DetalBookComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
