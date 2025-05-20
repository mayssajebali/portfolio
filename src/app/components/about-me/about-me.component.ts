import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent implements OnInit{
  images: string[] = [
    'assets/angular.png',
    'assets/spring-boot.png',
    'assets/nodejs.svg',
    'assets/flask.png',
    'assets/java.webp',
    'assets/python.png',
    'assets/mongoDb.webp',
    'assets/flutter.png'
  ];

  imageGroups: string[][] = [];
  currentSlide = 0;
  intervalId: any;

  ngOnInit(): void {
    this.groupImages();
    this.autoSlide();
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  groupImages(): void {
    for (let i = 0; i < this.images.length; i += 4) {
      this.imageGroups.push(this.images.slice(i, i + 4));
    }
  }

  autoSlide(): void {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 4000);
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.imageGroups.length;
  }

  prevSlide(): void {
    this.currentSlide = (this.currentSlide - 1 + this.imageGroups.length) % this.imageGroups.length;
  }
}
