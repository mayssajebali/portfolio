import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {
  downloadCV() {
    const cvUrl = 'assets/CV_MAYSSA_JEBALI.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'CV_MAYSSA_JEBALI.pdf';
    link.click();
  }
}
