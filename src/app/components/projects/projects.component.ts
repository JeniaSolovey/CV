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

  onImageChanged(index: number): void {
    setTimeout(() => {
      this.elRef.nativeElement.scrollTo(0, 1000);
      this.scroller.scrollToPosition([0, 1000]);
    }, 100);
  }
}
