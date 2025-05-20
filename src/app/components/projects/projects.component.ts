import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit, OnDestroy {
  projects = [
    { image: 'assets/medPLus.png', title: 'MedPlus' },
    { image: 'assets/loginMedPlus.png', title: 'Login MedPlus' },
    { image: 'assets/dashboardMedPlus.png', title: 'Dashboard MedPlus' }
  ];
  imagesProject1: string[] = [
    "assets/mentalSpark1.png" ,
    'assets/loginMentalSpark.png',
    'assets/mentalSparkHome.png',
    'assets/mentalSparkGames.png',
    'assets/mentalSparkGame.png',
  ];
  imagesProject2: string[] = [
    'assets/medPLus.png',
    'assets/medplus2.png',
    'assets/loginMedPlus.png',
    'assets/medPlusHome.png',
    'assets/discussionMedPlus.png',

  ];
  imagesProject3: string[] = [
    'assets/unitracker1.png',
    'assets/unitrackerLogin.png',
    'assets/unitrackerTasks.png',
    'assets/taskMangement.png',
    'assets/unitrackerDashboard.png',
  ];
  currentIndex: number = 0;
  currentImage1: string = this.imagesProject1[0];
  currentImage2: string = this.imagesProject2[0];
  currentImage3: string = this.imagesProject3[0];

  private intervalId: any;

  ngOnInit(): void {

  }
displayPhotos(){
  this.intervalId = setInterval(() => {
    this.currentIndex = (this.currentIndex + 1) % this.imagesProject2.length;
    this.currentImage1 = this.imagesProject1[this.currentIndex];
    this.currentImage2 = this.imagesProject2[this.currentIndex];
    this.currentImage3 = this.imagesProject3[this.currentIndex];

  }, 2000);
}
  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
  startAnimation(projectNumber: number) {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.imagesProject2.length;
      if (projectNumber === 1) {
        this.currentImage1 = this.imagesProject1[this.currentIndex];
      } else if (projectNumber === 2) {
        this.currentImage2 = this.imagesProject2[this.currentIndex];
      } else if (projectNumber === 3) {
        this.currentImage3 = this.imagesProject3[this.currentIndex];
      }
    }, 1000);
  }
  
  stopAnimation() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
      this.currentIndex = 0; // facultatif : revenir à l'image initiale
      this.currentImage1 = this.imagesProject1[0];
      this.currentImage2 = this.imagesProject2[0];
      this.currentImage3 = this.imagesProject3[0];
    }
  }
  
}

