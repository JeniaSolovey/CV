import { Component, OnInit } from '@angular/core';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { projectsData } from './projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  data = projectsData;

  currentProjectIndex = 0;
  nextIcon = faArrowRight;
  prevIcon = faArrowLeft;

  constructor() { }

  ngOnInit(): void {
  }

  prev(): void {
    this.currentProjectIndex--;
    if (this.currentProjectIndex < 0) {
      this.currentProjectIndex = this.data.length - 1;
    }
  }

  next(): void {
    this.currentProjectIndex++;
    if (this.currentProjectIndex >= this.data.length) {
      this.currentProjectIndex = 0;
    }
  }
}
