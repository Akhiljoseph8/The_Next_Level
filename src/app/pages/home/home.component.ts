import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  currentImageIndex = 0;
  carouselImages = [
    '../../../assets/background6.png', // Update with actual image paths
    '../../../assets/background5.png',
  ];
  cards = [
    {
      img: '../../../assets/Screenshot 2025-01-04 002351.png',
      title: 'Spoken English',
      description: 'Find the best programs suited for you.',
    },
    {
      img: '../../../assets/Screenshot 2025-01-04 001701.png',
      title: 'Employability Skill Trainings',
      description: 'Get mentorship from experienced professionals.',
    },
    {
      img: '../../../assets/Screenshot 2025-01-04 000905.png',
      title: 'IELTS Coaching',
      description: 'Easily apply to universities and colleges.',
    },
  ];
  ngOnInit() {
    this.startCarousel();
  }
 
  startCarousel() {
    setInterval(() => {
      this.currentImageIndex =
        (this.currentImageIndex + 1) % this.carouselImages.length;
    }, 5000); // Change image every 3 seconds
  }

 
}
