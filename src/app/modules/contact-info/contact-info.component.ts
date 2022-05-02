import { Component } from '@angular/core';
import { ContactInfo } from '@app/core';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css'],
})
export class ContactInfoComponent {
  contactInfos: ContactInfo[];

  constructor() {}

  ngOnInit() {
    this.contactInfos = [
      {
        img: '',
        title: 'hossein.ganjyar@gmail.com',
      },
      {
        img: '',
        title: '(+98)99 202434 61',
      },
      {
        img: '',
        title: 'Tehran, Iran',
      },
    ];
  }
}
