import { Component, OnInit } from '@angular/core';
import { faDownload, faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faLinkedin, faTelegramPlane } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  speakerIcon = faVolumeUp;
  githubIcon = faGithub;
  facebookIcon = faFacebook;
  linkedInIcon = faLinkedin;
  downloadIcon = faDownload;
  telegramIcon = faTelegramPlane;

  constructor() { }

  ngOnInit(): void {
  }

}
