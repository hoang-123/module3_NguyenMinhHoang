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
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

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
  }
  onSubmit() {
    if (this.bookForm.valid) {
        const { value } = this.bookForm;
        const data = {
            ...this.book,
            ...value
        };
        this.bookService.createBook(data).subscribe(
            next => {
                this.router.navigate(['list']);
            },
            error => console.log(error)
        );
    }
}

}
