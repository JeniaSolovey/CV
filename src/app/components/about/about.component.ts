import { Component } from '@angular/core';
import {
  faBeer,
  faBook,
  faCar,
  faCodeBranch, faCoffee,
  faFish,
  faGamepad,
  faGlobeAfrica, faHiking,
  faInfinity,
  faMap,
  faMountain
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  iconSize = '3x';

  globeIcon = faGlobeAfrica;
  mountainIcon = faMountain;
  codeIcon = faCodeBranch;
  infinityIcon = faInfinity;
  carIcon = faCar;
  gameIcon = faGamepad;
  bookIcon = faBook;
  travelIcon = faMap;
  fishIcon = faFish;
  beerIcon = faBeer;
  hikingIcon = faHiking;
  coffeeIcon = faCoffee;
  age: number;

  constructor() {
    this.age = this.calculateAge();

  }

  private calculateAge(): number {
    const today = new Date();
    const birthDate = new Date(1995, 10, 8);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  }
}
