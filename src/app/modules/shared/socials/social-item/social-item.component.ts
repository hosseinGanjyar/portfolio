import { Component, Input, OnInit } from '@angular/core';
import { Social } from '../../../../core/models/social.model';

@Component({
  selector: 'app-social-item',
  templateUrl: './social-item.component.html',
  styleUrls: ['./social-item.component.css'],
})
export class SocialItemComponent implements OnInit {
  @Input() data: Social;

  constructor() {}

  ngOnInit() {}
}
