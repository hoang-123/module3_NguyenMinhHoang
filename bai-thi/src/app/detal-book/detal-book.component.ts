import { BookService } from './../book.service';
import { Book } from './../book.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detal-book',
  templateUrl: './detal-book.component.html',
  styleUrls: ['./detal-book.component.css']
})
export class DetalBookComponent implements OnInit {
  book: Book;

  constructor(
    private bookService: BookService,
    private activatedRouter: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = +this.activatedRouter.snapshot.paramMap.get('id');
    this.bookService.getBookById(id).subscribe(
        next => (this.book = next),
    );
  }

}
