import { Component, Input, OnChanges, OnInit, Output, SimpleChanges, EventEmitter } from '@angular/core';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export enum MediaType {
  img,
  video,
}

export interface MediaItem {
  src: string;
  type: MediaType;
  alt?: string;
}

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent implements OnInit, OnChanges {

  @Input() media: MediaItem[] = [];
  currentSlideIndex = 0;
  mediaTypes = MediaType;
  rightIcon = faChevronRight;
  leftIcon = faChevronLeft;

  @Output() imageChanged = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty('media')) {
      this.currentSlideIndex = 0;
    }
  }

  changeImage(index: number): void {
    this.currentSlideIndex = index;
    if (this.currentSlideIndex < 0) {
      this.currentSlideIndex = this.media.length - 1;
    }
    if (this.currentSlideIndex === this.media.length) {
      this.currentSlideIndex = 0;
    }
    this.imageChanged.emit(this.currentSlideIndex);
  }
}
