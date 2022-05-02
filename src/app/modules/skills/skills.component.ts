import { Component, OnInit } from '@angular/core';
import { Skill } from '@app/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skills: Skill[];

  constructor() {}

  ngOnInit(): void {
    this.skills = [
      {
        title: 'html',
      },
      {
        title: 'css',
      },
      {
        title: 'js',
      },
      {
        title: 'angular',
      },
      {
        title: 'bootstrap',
      },
      {
        title: 'orientdb',
      },
      {
        title: 'redis',
      },
      {
        title: 'git',
      },
      {
        title: 'azure devops',
      },
      {
        title: 'jira',
      },
      {
        title: 'postman',
      },
      {
        title: 'restful',
      },
    ];
  }
}
