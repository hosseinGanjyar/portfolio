import { Component, Input } from '@angular/core';
import { Education } from '@app/core';

@Component({
  selector: 'app-education-item',
  templateUrl: './education-item.component.html',
  styleUrls: ['./education-item.component.css'],
})
export class EducationItemComponent {
  @Input() data: Education;
}
