import { Component, OnInit } from '@angular/core';
import { BookService } from './../book.service';
import { Book } from './../book.model';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

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
        this.bookService.updateBook(this.bookForm.value).subscribe(
            next => {
                this.router.navigate(['book/list']);
            },
            error => console.log(error)
        );
    }

}
