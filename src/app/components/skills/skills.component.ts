import { Component } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills = [
    { skill: '.NET Core, C#', level: 9 },
    { skill: 'Entity Framework Core', level: 9 },
    { skill: 'TypeScript/JavaScript', level: 9 },
    { skill: 'CQRS', level: 9 },
    { skill: 'Git/SVN', level: 9 },
    { skill: 'SQL, T-SQL', level: 8 },
    { skill: 'Testing (Unit, Integration, E2E)', level: 7 },
    { skill: 'Autofac', level: 7 },
    { skill: 'NgRx, RxJS', level: 7 },
    { skill: 'HTML, CSS(SCSS)', level: 9 },
    { skill: 'Microsoft SQL Server', level: 8 },
    { skill: 'React.js', level: 5 },
    { skill: 'Design Patterns', level: 6 },
    { skill: 'Algorithms', level: 7 },
    { skill: 'TDD, Docker, LINQ, Bootstrap, Reflection, OOP…', level: 8 },
  ];

  languages = [
    { name: 'English - B2', level: 4 },
    { name: 'Ukrainian - C2', level: 6 },
    { name: 'Russian - C2', level: 6 },
    { name: 'Polish - C1', level: 5 },
  ];
}
