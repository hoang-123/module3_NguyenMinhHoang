import { Component, OnInit } from '@angular/core';
import { BookService } from './../book.service';
import { Book } from './../book.model';
import {
  FormGroup,
  FormControl,
  FormBuilder
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {

  book: Book;
  bookForm: FormGroup;
  constructor(
    private bookService: BookService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.bookForm = this.fb.group({
      title: [''],
      author: [''],
      description: ['']
    });
    const id = +this.route.snapshot.paramMap.get('id');
    this.bookService.getBookById(id).subscribe(
      next => {
        this.book = next;
        this.bookForm.patchValue(this.book);
      },
      error => {
        console.log(error);
        this.book = null;
      }
    );
  }
  onSubmit() {
        // const { value } = this.bookForm;
        // const data = {
        //     ...this.book,
        //     ...value
        // };
        this.bookService.deleteBook(this.bookForm.value).subscribe(
            next => {
                this.router.navigate(['book']);
            },
            error => console.log(error)
        );
}

}
