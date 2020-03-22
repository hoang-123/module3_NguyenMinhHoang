import { BookService } from './../book.service';
import { Book } from './../book.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detal-book',
  templateUrl: './detal-book.component.html',
  styleUrls: ['./detal-book.component.css']
})
export class DetalBookComponent implements OnInit {

  book: Book;
  bookForm: FormGroup;

  constructor(
    private bookService: BookService,
    private activatedRouter: ActivatedRoute
  ) {}

  ngOnInit() {
    // this.bookService.getBookById(this.book.id).subscribe(
    //   data => (this.book = data)
    // );
    const id = +this.activatedRouter.snapshot.paramMap.get('id');
    this.bookService.getBookById(id).subscribe(
        next => (this.book = next),
        error => {
            console.log(error);
            this.book = null;
        }
    );
  }

}
