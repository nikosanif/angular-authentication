import { Component } from '@angular/core';

@Component({
  selector: 'aa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  readonly features = [
    {
      name: 'Angular',
      description: 'This is a very small description',
      github: 'https://github.com/angular/angular',
      docs: 'https://angular.io/docs',
    },
    {
      name: 'Angular',
      description: 'This is a very small description',
      docs: 'https://angular.io/docs',
    },
    {
      name: 'Angular',
      description: 'This is a very small description',
      github: 'https://github.com/angular/angular',
    },
    {
      name: 'Angular',
      description: 'This is a very small description',
      github: 'https://github.com/angular/angular',
      docs: 'https://angular.io/docs',
    },
  ];
}
