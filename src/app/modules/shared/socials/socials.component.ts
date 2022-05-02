import { Component, OnInit } from '@angular/core';
import { Social } from '../../../core/models/social.model';

@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.css'],
})
export class SocialsComponent implements OnInit {
  socials: Social[];

  constructor() {}

  ngOnInit(): void {
    this.socials = [
      {
        name: 'LinkedIn',
        url: '',
        img: '',
      },
      {
        name: 'Skype',
        url: '',
        img: '',
      },
      {
        name: 'StackOverFlow',
        url: '',
        img: '',
      },
      {
        name: 'GitHub',
        url: '',
        img: '',
      },
    ];
  }
}
