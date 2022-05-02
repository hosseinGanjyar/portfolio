import { Component, Input } from '@angular/core';
import { Experience } from '@app/core';

@Component({
  selector: 'app-experience-item',
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.css'],
})
export class ExperienceItemComponent {
  @Input() data: Experience;
}
