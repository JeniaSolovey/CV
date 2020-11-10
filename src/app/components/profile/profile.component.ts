import { Component, OnInit } from '@angular/core';
import { faDownload, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faLinkedin, faTelegramPlane } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  githubIcon = faGithub;
  facebookIcon = faFacebook;
  linkedInIcon = faLinkedin;
  downloadIcon = faDownload;
  telegramIcon = faTelegramPlane;
  contactIcon = faEnvelope;

  constructor() { }

  ngOnInit(): void {
  }

}
