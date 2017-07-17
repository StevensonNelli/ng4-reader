import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lang-picker',
  templateUrl: './lang-picker.component.html',
  styleUrls: ['./lang-picker.component.scss']
})

export class LangPickerComponent implements OnInit {
  currentLang: any;
  options:any = [];
  language: string;
  constructor() { }

  ngOnInit() {
    this.language = 'Language';
    this.options = [
      {
        name: 'English',
        value: "English"
      },
      {
        name: 'Hindi',
        value: "Hindi"
      },
      {
        name: 'Telugu',
        value: "Telugu"
      }
    ]
  }

}
