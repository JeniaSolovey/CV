import { Component, OnInit } from '@angular/core';
import { faEnvelope, faListAlt, faUser } from '@fortawesome/free-regular-svg-icons';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  aboutIcon = faUser;
  cvIcon = faListAlt;
  projectsIcon = faCodeBranch;
  contactIcon = faEnvelope;


  constructor() { }

  ngOnInit(): void {
  }

}
