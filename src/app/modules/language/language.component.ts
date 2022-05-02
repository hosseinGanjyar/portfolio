import { Component, OnInit } from '@angular/core';
import { Language } from '@app/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css'],
})
export class LanguageComponent implements OnInit {
  languages: Language[];

  constructor() {}

  ngOnInit() {
    this.languages = [
      {
        name: 'ielts',
        score: '6.0',
      },
      {
        name: 'farsi',
        isNative: true,
      },
    ];
  }
}
