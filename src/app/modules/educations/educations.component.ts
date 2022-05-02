import { Component } from '@angular/core';
import { Education } from '@app/core';

@Component({
  selector: 'app-educations',
  templateUrl: './educations.component.html',
  styleUrls: ['./educations.component.css'],
})
export class EducationsComponent {
  educations: Education[];

  constructor() {}

  ngOnInit() {
    this.educations = [
      {
        school: 'Jamshid Kashani',
        degree: 'B.S. SoftwareEngineering',
        sDate: 'may 2011',
        eDate: 'may 2013',
      },
      {
        school: 'Shamsipour',
        degree: 'A.A. Computer Engineering',
        sDate: 'may 2009',
        eDate: 'may 2011',
      },
    ];
  }
}
