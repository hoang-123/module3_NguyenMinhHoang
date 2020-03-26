import { Book } from './book.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

private baseUrl = 'http://localhost:3000/books';

getAllBook(): Observable<any> {
  return this.http.get(this.baseUrl);
}

getBookById(id: number): Observable<Book> {
  return this.http.get<Book>(`${this.baseUrl}/${id}`);
}

createBook(cus: Partial<Book>): Observable<Book> {
  return this.http.post<Book>(this.baseUrl, cus);
}

updateBook(book: Book): Observable<Book> {
  return this.http.put<Book>(`${this.baseUrl}/${book.id}`, book);
}
deleteBook(book: Book): Observable<any> {
  return this.http.delete(`${this.baseUrl}/${book.id}`);
}

}
