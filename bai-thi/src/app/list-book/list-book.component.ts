import { BookService } from './../book.service';
import { Book } from './../book.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {

  bookList: Book[] = [];
  bookForm: FormGroup;

  constructor(
    private bookService: BookService,
    private activatedRouter: ActivatedRoute
  ) {}

  ngOnInit() {
    this.bookService.getAllBook().subscribe(
      next => (this.bookList = next),
      error => (this.bookList = [])
    );
  }

}
