import { Component, ElementRef, OnInit } from '@angular/core';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { projectsData } from './projects.service';
import { ViewportScroller } from '@angular/common';

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

  constructor(private elRef: ElementRef, private scroller: ViewportScroller) { }

  ngOnInit(): void {
  }

  onProjectChanged(projectIndex: number): void {
    if (window.innerWidth > 500) {
      this.scrollTo(0, 100);
    }

    setTimeout(() => {
      this.currentProjectIndex = projectIndex;
      if (this.currentProjectIndex < 0) {
        this.currentProjectIndex = this.data.length - 1;
      }
      if (this.currentProjectIndex === this.data.length) {
        this.currentProjectIndex = 0;
      }
    }, 100);
  }

  onImageChanged(): void {
    this.scrollTo(1000, 100);
  }

  private scrollTo(where: number, delay: number): void {
    setTimeout(() => {
      this.elRef.nativeElement.scrollTo(0, where);
      this.scroller.scrollToPosition([0, where]);
    }, delay);
  }
}
