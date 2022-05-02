import { Component, OnInit } from '@angular/core';
import { Experience } from '@app/core';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css'],
})
export class ExperiencesComponent implements OnInit {
  experiences: Experience[];

  constructor() {}

  ngOnInit() {
    this.experiences = [
      {
        title: 'Web Developer (Angular) ',
        companyName: 'Dadekavan',
        type: 'Full-Time', // should be ENUM
        date: 'Aug 2021 - Present · 9 mos',
        location: 'Tehran Province, Iran',
        descriptions: [
          'Develop some modules',
          'Refactor & maintenance current codes',
        ],
      },
      {
        title: 'Full StackDeveloper',
        companyName: 'Research Center for Developing Advanced Technologies',
        type: 'Full-Time', // should be ENUM
        date: 'Aug 2021 - Present · 9 mos',
        location: 'Tehran Province, Iran',
        descriptions: [
          'Design BI dashboard for analyze data usign d3.js',
          'Design ,engineer and consulting graph-document database (orientdb) with indexing on nodes-edges',
          'Implement a complex service-oriented architecture with node js and wcf',
          'Develope Rest Api with nodejs and redis caching for querying on elasticsearch db',
          'Produce and development of desktop apps with C# language and SqlServer',
        ],
      },
      {
        title: 'Web Developer',
        companyName: 'Iran Cyber Monitor',
        type: 'Part-Time', // should be ENUM
        date: 'Aug 2021 - Present · 9 mos',
        location: 'Tehran Province, Iran',
        descriptions: [
          'Design, maintain, document and implement custom Angular single page and e-Commerce websites for its clients. Responsibilities included all aspects of web development to analytics, graphics, ui and ux',
        ],
      },
    ];
  }
}
