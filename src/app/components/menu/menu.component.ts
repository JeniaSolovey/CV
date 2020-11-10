import { Component } from '@angular/core';
import { faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons';
import { faBrain, faBriefcase, faCodeBranch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  aboutIcon = faUser;
  skillsIcon = faBrain;
  backgroundIcon = faBriefcase;
  projectsIcon = faCodeBranch;
}
