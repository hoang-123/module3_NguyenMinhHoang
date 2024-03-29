import { Component, OnInit } from '@angular/core';
import { DictionaryService, IWord } from 'src/dictionary.service';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent implements OnInit {

  word: IWord;
  constructor(private dictionaryService: DictionaryService) { }

  ngOnInit() {
  }

  search(word: string) {
    const meaning = this.dictionaryService.search(word);
    this.word = {
      key: word,
      meaning: meaning
    };
  }

}
